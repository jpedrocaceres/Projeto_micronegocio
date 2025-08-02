module.exports = {

"[next]/internal/font/google/inter_59dee874.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_59dee874-module__9CtR0q__className",
});
}),
"[next]/internal/font/google/inter_59dee874.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[project]/env.Configs.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$env$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@next/env/dist/index.js [app-rsc] (ecmascript)");
;
const projectDir = process.cwd();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$env$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadEnvConfig"])(projectDir);
// Validate required environment variables for Supabase
const requiredEnvVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];
// Supabase service role key (for server-side operations)
const serverEnvVars = [
    'SUPABASE_SERVICE_ROLE_KEY'
];
// Check for missing environment variables in development
if ("TURBOPACK compile-time truthy", 1) {
    const missingVars = requiredEnvVars.filter((varName)=>!process.env[varName]);
    if (missingVars.length > 0) {
        console.warn('⚠️ Missing Supabase environment variables:', missingVars);
        console.warn('Please check your .env file');
    } else {
        console.log('✅ All Supabase environment variables are loaded');
    }
    // Check Supabase service role key for SSR
    const missingServerVars = serverEnvVars.filter((varName)=>!process.env[varName]);
    if (missingServerVars.length > 0) {
        console.warn('⚠️ Missing Supabase service role key for SSR:', missingServerVars);
        console.warn('Server-side features may not work properly');
    } else {
        console.log('✅ All Supabase server variables are loaded for SSR');
    }
}
}),
"[project]/components/ThemeProvider.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider,
    "useTheme": ()=>useTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ThemeProvider.tsx <module evaluation>", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ThemeProvider.tsx <module evaluation>", "useTheme");
}),
"[project]/components/ThemeProvider.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider,
    "useTheme": ()=>useTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ThemeProvider.tsx", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ThemeProvider.tsx", "useTheme");
}),
"[project]/components/ThemeProvider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$Configs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env.Configs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: 'BizManager - Micronegócio',
    description: 'Sistema de gerenciamento para micronegócios'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt",
        className: "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpeedInsights"], {}, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/@next/env/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
(()=>{
    var e = {
        383: (e)=>{
            "use strict";
            function _searchLast(e, t) {
                const n = Array.from(e.matchAll(t));
                return n.length > 0 ? n.slice(-1)[0].index : -1;
            }
            function _interpolate(e, t, n) {
                const r = _searchLast(e, /(?!(?<=\\))\$/g);
                if (r === -1) return e;
                const o = e.slice(r);
                const s = /((?!(?<=\\))\${?([\w]+)(?::-([^}\\]*))?}?)/;
                const i = o.match(s);
                if (i != null) {
                    const [, r, o, s] = i;
                    return _interpolate(e.replace(r, t[o] || s || n.parsed[o] || ""), t, n);
                }
                return e;
            }
            function _resolveEscapeSequences(e) {
                return e.replace(/\\\$/g, "$");
            }
            function expand(e) {
                const t = e.ignoreProcessEnv ? {} : process.env;
                for(const n in e.parsed){
                    const r = Object.prototype.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
                    e.parsed[n] = _resolveEscapeSequences(_interpolate(r, t, e));
                }
                for(const n in e.parsed){
                    t[n] = e.parsed[n];
                }
                return e;
            }
            e.exports.j = expand;
        },
        234: (e, t, n)=>{
            const r = n(147);
            const o = n(17);
            const s = n(37);
            const i = n(113);
            const c = n(803);
            const a = c.version;
            const p = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
            function parse(e) {
                const t = {};
                let n = e.toString();
                n = n.replace(/\r\n?/gm, "\n");
                let r;
                while((r = p.exec(n)) != null){
                    const e = r[1];
                    let n = r[2] || "";
                    n = n.trim();
                    const o = n[0];
                    n = n.replace(/^(['"`])([\s\S]*)\1$/gm, "$2");
                    if (o === '"') {
                        n = n.replace(/\\n/g, "\n");
                        n = n.replace(/\\r/g, "\r");
                    }
                    t[e] = n;
                }
                return t;
            }
            function _parseVault(e) {
                const t = _vaultPath(e);
                const n = l.configDotenv({
                    path: t
                });
                if (!n.parsed) {
                    throw new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);
                }
                const r = _dotenvKey(e).split(",");
                const o = r.length;
                let s;
                for(let e = 0; e < o; e++){
                    try {
                        const t = r[e].trim();
                        const o = _instructions(n, t);
                        s = l.decrypt(o.ciphertext, o.key);
                        break;
                    } catch (t) {
                        if (e + 1 >= o) {
                            throw t;
                        }
                    }
                }
                return l.parse(s);
            }
            function _log(e) {
                console.log(`[dotenv@${a}][INFO] ${e}`);
            }
            function _warn(e) {
                console.log(`[dotenv@${a}][WARN] ${e}`);
            }
            function _debug(e) {
                console.log(`[dotenv@${a}][DEBUG] ${e}`);
            }
            function _dotenvKey(e) {
                if (e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0) {
                    return e.DOTENV_KEY;
                }
                if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
                    return process.env.DOTENV_KEY;
                }
                return "";
            }
            function _instructions(e, t) {
                let n;
                try {
                    n = new URL(t);
                } catch (e) {
                    if (e.code === "ERR_INVALID_URL") {
                        throw new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development");
                    }
                    throw e;
                }
                const r = n.password;
                if (!r) {
                    throw new Error("INVALID_DOTENV_KEY: Missing key part");
                }
                const o = n.searchParams.get("environment");
                if (!o) {
                    throw new Error("INVALID_DOTENV_KEY: Missing environment part");
                }
                const s = `DOTENV_VAULT_${o.toUpperCase()}`;
                const i = e.parsed[s];
                if (!i) {
                    throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${s} in your .env.vault file.`);
                }
                return {
                    ciphertext: i,
                    key: r
                };
            }
            function _vaultPath(e) {
                let t = o.resolve(process.cwd(), ".env");
                if (e && e.path && e.path.length > 0) {
                    t = e.path;
                }
                return t.endsWith(".vault") ? t : `${t}.vault`;
            }
            function _resolveHome(e) {
                return e[0] === "~" ? o.join(s.homedir(), e.slice(1)) : e;
            }
            function _configVault(e) {
                _log("Loading env from encrypted .env.vault");
                const t = l._parseVault(e);
                let n = process.env;
                if (e && e.processEnv != null) {
                    n = e.processEnv;
                }
                l.populate(n, t, e);
                return {
                    parsed: t
                };
            }
            function configDotenv(e) {
                let t = o.resolve(process.cwd(), ".env");
                let n = "utf8";
                const s = Boolean(e && e.debug);
                if (e) {
                    if (e.path != null) {
                        t = _resolveHome(e.path);
                    }
                    if (e.encoding != null) {
                        n = e.encoding;
                    }
                }
                try {
                    const o = l.parse(r.readFileSync(t, {
                        encoding: n
                    }));
                    let s = process.env;
                    if (e && e.processEnv != null) {
                        s = e.processEnv;
                    }
                    l.populate(s, o, e);
                    return {
                        parsed: o
                    };
                } catch (e) {
                    if (s) {
                        _debug(`Failed to load ${t} ${e.message}`);
                    }
                    return {
                        error: e
                    };
                }
            }
            function config(e) {
                const t = _vaultPath(e);
                if (_dotenvKey(e).length === 0) {
                    return l.configDotenv(e);
                }
                if (!r.existsSync(t)) {
                    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`);
                    return l.configDotenv(e);
                }
                return l._configVault(e);
            }
            function decrypt(e, t) {
                const n = Buffer.from(t.slice(-64), "hex");
                let r = Buffer.from(e, "base64");
                const o = r.slice(0, 12);
                const s = r.slice(-16);
                r = r.slice(12, -16);
                try {
                    const e = i.createDecipheriv("aes-256-gcm", n, o);
                    e.setAuthTag(s);
                    return `${e.update(r)}${e.final()}`;
                } catch (e) {
                    const t = e instanceof RangeError;
                    const n = e.message === "Invalid key length";
                    const r = e.message === "Unsupported state or unable to authenticate data";
                    if (t || n) {
                        const e = "INVALID_DOTENV_KEY: It must be 64 characters long (or more)";
                        throw new Error(e);
                    } else if (r) {
                        const e = "DECRYPTION_FAILED: Please check your DOTENV_KEY";
                        throw new Error(e);
                    } else {
                        console.error("Error: ", e.code);
                        console.error("Error: ", e.message);
                        throw e;
                    }
                }
            }
            function populate(e, t, n = {}) {
                const r = Boolean(n && n.debug);
                const o = Boolean(n && n.override);
                if (typeof t !== "object") {
                    throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
                }
                for (const n of Object.keys(t)){
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        if (o === true) {
                            e[n] = t[n];
                        }
                        if (r) {
                            if (o === true) {
                                _debug(`"${n}" is already defined and WAS overwritten`);
                            } else {
                                _debug(`"${n}" is already defined and was NOT overwritten`);
                            }
                        }
                    } else {
                        e[n] = t[n];
                    }
                }
            }
            const l = {
                configDotenv: configDotenv,
                _configVault: _configVault,
                _parseVault: _parseVault,
                config: config,
                decrypt: decrypt,
                parse: parse,
                populate: populate
            };
            e.exports.configDotenv = l.configDotenv;
            e.exports._configVault = l._configVault;
            e.exports._parseVault = l._parseVault;
            e.exports.config = l.config;
            e.exports.decrypt = l.decrypt;
            e.exports.parse = l.parse;
            e.exports.populate = l.populate;
            e.exports = l;
        },
        113: (e)=>{
            "use strict";
            e.exports = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
        },
        147: (e)=>{
            "use strict";
            e.exports = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
        },
        37: (e)=>{
            "use strict";
            e.exports = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
        },
        17: (e)=>{
            "use strict";
            e.exports = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
        },
        803: (e)=>{
            "use strict";
            e.exports = JSON.parse('{"name":"dotenv","version":"16.3.1","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://github.com/motdotla/dotenv?sponsor=1","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}');
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var o = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return o.exports;
    }
    (()=>{
        __nccwpck_require__.n = (e)=>{
            var t = e && e.__esModule ? ()=>e["default"] : ()=>e;
            __nccwpck_require__.d(t, {
                a: t
            });
            return t;
        };
    })();
    (()=>{
        __nccwpck_require__.d = (e, t)=>{
            for(var n in t){
                if (__nccwpck_require__.o(t, n) && !__nccwpck_require__.o(e, n)) {
                    Object.defineProperty(e, n, {
                        enumerable: true,
                        get: t[n]
                    });
                }
            }
        };
    })();
    (()=>{
        __nccwpck_require__.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
    })();
    (()=>{
        __nccwpck_require__.r = (e)=>{
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            });
        };
    })();
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/@next/env/dist") + "/";
    var n = {};
    (()=>{
        "use strict";
        __nccwpck_require__.r(n);
        __nccwpck_require__.d(n, {
            initialEnv: ()=>a,
            updateInitialEnv: ()=>updateInitialEnv,
            processEnv: ()=>processEnv,
            resetEnv: ()=>resetEnv,
            loadEnvConfig: ()=>loadEnvConfig
        });
        var e = __nccwpck_require__(147);
        var t = __nccwpck_require__.n(e);
        var r = __nccwpck_require__(17);
        var o = __nccwpck_require__.n(r);
        var s = __nccwpck_require__(234);
        var i = __nccwpck_require__.n(s);
        var c = __nccwpck_require__(383);
        let a = undefined;
        let p = undefined;
        let l = undefined;
        let u = [];
        let _ = [];
        function updateInitialEnv(e) {
            Object.assign(a || {}, e);
        }
        function replaceProcessEnv(e) {
            Object.keys(process.env).forEach((t)=>{
                if (!t.startsWith("__NEXT_PRIVATE")) {
                    if (e[t] === undefined || e[t] === "") {
                        delete process.env[t];
                    }
                }
            });
            Object.entries(e).forEach(([e, t])=>{
                process.env[e] = t;
            });
        }
        function processEnv(e, t, n = console, o = false, i) {
            var p;
            if (!a) {
                a = Object.assign({}, process.env);
            }
            if (!o && (process.env.__NEXT_PROCESSED_ENV || e.length === 0)) {
                return [
                    process.env
                ];
            }
            process.env.__NEXT_PROCESSED_ENV = "true";
            const l = Object.assign({}, a);
            const u = {};
            for (const o of e){
                try {
                    let e = {};
                    e.parsed = s.parse(o.contents);
                    e = (0, c.j)(e);
                    if (e.parsed && !_.some((e)=>e.contents === o.contents && e.path === o.path)) {
                        i === null || i === void 0 ? void 0 : i(o.path);
                    }
                    for (const t of Object.keys(e.parsed || {})){
                        if (typeof u[t] === "undefined" && typeof l[t] === "undefined") {
                            u[t] = (p = e.parsed) === null || p === void 0 ? void 0 : p[t];
                        }
                    }
                    o.env = e.parsed || {};
                } catch (e) {
                    n.error(`Failed to load env from ${r.join(t || "", o.path)}`, e);
                }
            }
            return [
                Object.assign(process.env, u),
                u
            ];
        }
        function resetEnv() {
            if (a) {
                replaceProcessEnv(a);
            }
        }
        function loadEnvConfig(t, n, o = console, s = false, i) {
            if (!a) {
                a = Object.assign({}, process.env);
            }
            if (p && !s) {
                return {
                    combinedEnv: p,
                    parsedEnv: l,
                    loadedEnvFiles: u
                };
            }
            replaceProcessEnv(a);
            _ = u;
            u = [];
            const c = ("TURBOPACK compile-time value", "development") === "test";
            const d = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : n ? "development" : "production";
            const f = [
                `.env.${d}.local`,
                d !== "test" && `.env.local`,
                `.env.${d}`,
                ".env"
            ].filter(Boolean);
            for (const n of f){
                const s = r.join(t, n);
                try {
                    const t = e.statSync(s);
                    if (!t.isFile() && !t.isFIFO()) {
                        continue;
                    }
                    const r = e.readFileSync(s, "utf8");
                    u.push({
                        path: n,
                        contents: r,
                        env: {}
                    });
                } catch (e) {
                    if (e.code !== "ENOENT") {
                        o.error(`Failed to load env from ${n}`, e);
                    }
                }
            }
            [p, l] = processEnv(u, t, o, s, i);
            return {
                combinedEnv: p,
                parsedEnv: l,
                loadedEnvFiles: u
            };
        }
    })();
    module.exports = n;
})();
}}),
"[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SpeedInsights": ()=>SpeedInsights
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SpeedInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SpeedInsights() from the server but SpeedInsights is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs <module evaluation>", "SpeedInsights");
}),
"[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SpeedInsights": ()=>SpeedInsights
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SpeedInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SpeedInsights() from the server but SpeedInsights is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs", "SpeedInsights");
}),
"[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__82a84599._.js.map