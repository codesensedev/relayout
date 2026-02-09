import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

// Plugin to minify CSS in template literals
function minifyLitCSS() {
  return {
    name: 'minify-lit-css',
    transform(code, id) {
      if (id.endsWith('.ts') || id.endsWith('.js')) {
        // Minify CSS in css`...` or lit.css`...` template literals
        // Regex matches `css` preceded by a word boundary or property access
        const transformed = code.replace(/(\bcss)\s*`([\s\S]*?)`/g, (match, tag, css) => {
          const minified = css
            .replace(/\s*\n\s*/g, ' ')           // Remove newlines and extra spaces
            .replace(/\s*([{}:;,])\s*/g, '$1')   // Remove spaces around punctuation
            .replace(/:\s+/g, ':')               // Remove spaces after colons
            .replace(/\s+/g, ' ')                // Collapse multiple spaces
            .trim();
          
          return `${tag}\`${minified}\``;
        });
        
        if (transformed !== code) {
          return { code: transformed, map: null };
        }
      }
      return null;
    }
  };
}

export default {
  input: 'src/js/index.ts',
  output: {
    file: 'dist/js/relayout.js',
    format: 'esm',
    sourcemap: true,
    banner: `/*!
 * Relayout - Minimalist library for building complex responsive layouts
 *
 * Copyright (c) 2025 Lucian Pacurar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */`
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/js/types'
    }),
    minifyLitCSS(),  // Run after TypeScript to affect compiled JS (uses loose regex to catch aliased imports)
    terser({
      ecma: 2020,
      format: {
        comments: /^!/  // Preserve only /*! ... */ license comments (see also 'some')
      },
      compress: {
        drop_console: false,
        passes: 2
      },
      mangle: {
        properties: {
          regex: /^_/
        }
      }
    })
  ]
};
