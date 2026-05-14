#!/usr/bin/env python3
"""
Panel Admin — Mario Rodriguez Portfolio
Ejecuta este script para iniciar el servidor local de administración.
Para cerrarlo, presiona Ctrl+C en esta ventana.
"""

import http.server
import json
import os
import re
import subprocess
import threading
import webbrowser
from urllib.parse import urlparse

PORT = 5050
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class AdminHandler(http.server.SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    # ── POST endpoints ────────────────────────────────────────────────────
    def do_POST(self):
        path = urlparse(self.path).path

        if path == '/api/save':
            self._save_data()
        elif path == '/api/publish':
            self._publish()
        elif path == '/api/gitstatus':
            self._git_status()
        else:
            self._json_response(404, {'ok': False, 'error': 'Not found'})

    def _read_body(self):
        length = int(self.headers.get('Content-Length', 0))
        return json.loads(self.rfile.read(length)) if length else {}

    def _json_response(self, code, payload):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    # ── /api/save ─────────────────────────────────────────────────────────
    def _save_data(self):
        try:
            data = self._read_body()

            # Write data.json
            data_path = os.path.join(BASE_DIR, 'data.json')
            with open(data_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            # Write portfolio-data.js (used by index.html)
            js_path = os.path.join(BASE_DIR, 'portfolio-data.js')
            js_content = (
                '// ARCHIVO GENERADO AUTOMÁTICAMENTE — no editar manualmente\n'
                '// Edita desde el panel admin y guarda para regenerar este archivo\n'
                f'window.PORTFOLIO_DATA = {json.dumps(data, ensure_ascii=False)};\n'
            )
            with open(js_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            # Update inline data block in admin/index.html
            admin_html_path = os.path.join(BASE_DIR, 'admin', 'index.html')
            with open(admin_html_path, 'r', encoding='utf-8') as f:
                html = f.read()
            new_block = (
                '/* BEGIN_PORTFOLIO_DATA */\n'
                f'window.PORTFOLIO_DATA = {json.dumps(data, ensure_ascii=False)};\n'
                '/* END_PORTFOLIO_DATA */'
            )
            html = re.sub(
                r'/\* BEGIN_PORTFOLIO_DATA \*/.*?/\* END_PORTFOLIO_DATA \*/',
                new_block,
                html,
                flags=re.DOTALL
            )
            with open(admin_html_path, 'w', encoding='utf-8') as f:
                f.write(html)

            print(f'  [GUARDADO] data.json, portfolio-data.js y admin/index.html actualizados')
            self._json_response(200, {'ok': True})
        except Exception as e:
            print(f'  [ERROR] {e}')
            self._json_response(500, {'ok': False, 'error': str(e)})

    # ── /api/publish ──────────────────────────────────────────────────────
    def _publish(self):
        try:
            body = self._read_body()
            message = body.get('message', 'Update portfolio content')

            output_lines = []

            def run(cmd):
                result = subprocess.run(
                    cmd, cwd=BASE_DIR,
                    capture_output=True, text=True, encoding='utf-8'
                )
                out = (result.stdout + result.stderr).strip()
                if out:
                    output_lines.append(f'$ {" ".join(cmd)}\n{out}')
                return result.returncode

            rc1 = run(['git', 'add', '.'])
            rc2 = run(['git', 'commit', '-m', message])
            rc3 = run(['git', 'push'])

            output = '\n\n'.join(output_lines) or 'Sin salida'
            ok = rc3 == 0

            print(f'  [PUBLICADO] rc={rc3}')
            self._json_response(200, {'ok': ok, 'output': output})
        except FileNotFoundError:
            self._json_response(200, {
                'ok': False,
                'output': 'Git no encontrado. Instala git en tu PC para poder publicar.',
                'errors': ''
            })
        except Exception as e:
            self._json_response(500, {'ok': False, 'error': str(e)})

    # ── /api/gitstatus ────────────────────────────────────────────────────
    def _git_status(self):
        try:
            result = subprocess.run(
                ['git', 'status'], cwd=BASE_DIR,
                capture_output=True, text=True, encoding='utf-8'
            )
            self._json_response(200, {'ok': True, 'output': (result.stdout + result.stderr).strip()})
        except FileNotFoundError:
            self._json_response(200, {'ok': False, 'output': 'Git no instalado.'})
        except Exception as e:
            self._json_response(500, {'ok': False, 'error': str(e)})

    # ── Silence default request logs (keep clean output) ─────────────────
    def log_message(self, fmt, *args):
        pass


def open_browser():
    import time
    time.sleep(1.2)
    webbrowser.open(f'http://localhost:{PORT}/admin/')


if __name__ == '__main__':
    print('=' * 55)
    print('  Panel Admin — Mario Rodriguez Portfolio')
    print('=' * 55)
    print(f'  URL:       http://localhost:{PORT}/admin/')
    print(f'  Portfolio: http://localhost:{PORT}/')
    print(f'  Directorio: {BASE_DIR}')
    print()
    print('  Abriendo navegador...')
    print('  Presiona Ctrl+C para cerrar el servidor.')
    print('=' * 55)

    threading.Thread(target=open_browser, daemon=True).start()

    try:
        with http.server.HTTPServer(('', PORT), AdminHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n  Servidor cerrado. ¡Hasta luego!')
