/* SequelSphere - JavaScript Relational DataBase
 * Copyright (c) 2012, Sequel Sphere, LLC.
 * All rights reserved.
 * Use of SequelSphere and/or this file constitutes
 * acceptance of the full license agreement found
 * at: http://SequelSphere.com/eula/
 */
var d = {
    a: "number",
    b: "string",
    c: "tableName",
    d: "SSDB_CHANGE_TRACKERS",
    e: "undefined",
    f: " is not yet implemented.  Sorry!",
    g: "1.0",
    h: "key",
    i: "function",
    j: "ORDER",
    k: "Non-Numeric value found in the function ",
    l: "FROM",
    m: "SELECT",
    n: "Row argument passed to ",
    o: "JOIN",
    p: "INNER",
    q: "AND",
    r: "readwrite",
    s: "persistenceScope",
    t: "isTrackingOn",
    u: "grpexpr",
    v: "deleteRow",
    w: "boolean",
    x: "WHERE",
    y: "USING",
    z: "UNION",
    A: "Table '",
    B: "RIGHT",
    C: "NOT",
    D: "LIKE",
    E: "INTERSECT",
    F: "GROUP",
    G: "FULL",
    H: "EXCEPT",
    I: "AS",
    J: "<br/>",
    K: "          ",
    L: "||",
    M: "updateRow",
    N: "tabInfos",
    O: "tabId",
    P: "row",
    Q: "ord",
    R: "date",
    S: "XOR",
    T: "VALUES",
    U: "THIS EXPRESSION.",
    V: "OUTER",
    W: "OR",
    X: "ON",
    Y: "NOT LIKE",
    Z: "NOT IN",
    $: "NOT BETWEEN",
    _: "Missing keyword 'JOIN' in the FROM clause.",
    ba: "LEFT",
    bb: "Inconsistent number of Expressions as Columns within VALUES Clause.",
    bc: "IN",
    bd: "EXISTS",
    be: "BETWEEN",
    bf: "ALL",
    bg: ">>",
    bh: ">=",
    bi: "<>",
    bj: "<=",
    bk: "<<",
    bl: "...",
    bm: "' does not exist.",
    bn: "!=",
    bo: " is invalid.  ",
    bp: "version",
    bq: "tracker_name",
    br: "table",
    bs: "tabType",
    bt: "tabName",
    bu: "received ",
    bv: "readonly",
    bw: "primaryKey",
    bx: "perScope",
    by: "on table '",
    bz: "object",
    bA: "nextTabId",
    bB: "nextColId",
    bC: "insertRow",
    bD: "id",
    bE: "delete",
    bF: "default",
    bG: "data",
    bH: "columns",
    bI: "column '",
    bJ: "colName",
    bK: "action",
    bL: "",
    bM: "'",
    bN: "WITH",
    bO: "WHEN",
    bP: "Unable to parse Number: '",
    bQ: "The name '",
    bR: "SplitJoinAlgorithm",
    bS: "SSDB_TRACKER_",
    bT: "Invalid Column Reference: ",
    bU: "HAVING",
    bV: "GROUPING_SETS",
    bW: "DISTINCT",
    bX: "DESC",
    bY: "Cannot order by column #",
    bZ: "COL",
    b$: "BY",
    b_: "ASC",
    ca: "';  ",
    cb: "' does not abide by valid naming rules: [A-Z][A-Z0-9_]+",
    cd: "' clause: ",
    ce: "' (ix ",
    cf: " is invalid.  Cannot process type ",
    cg: " (This column is not specified in the GROUP BY clause)",
    ch: "tracker_table",
    ci: "table_name",
    cj: "table_info",
    ck: "tabid",
    cl: "tab.",
    cm: "seqNbr",
    cn: "row_values",
    co: "prov.ver",
    cq: "ordNbr",
    cr: "join_split_test",
    cs: "is_tracking",
    ct: "isSameAs()",
    cu: "getValueFctn()",
    cv: "getChildExpressions()",
    cw: "full",
    cx: "expr",
    cy: "createFromPartPlan(): Unknown From Part Type.",
    cz: "com.SequelSphereDB.",
    cA: "colType",
    cB: "colLength",
    cC: "colId",
    cD: "cat.ver",
    cE: "cat.str",
    cF: "allowNulls",
    cG: "_tab",
    cH: "_date_time_interval_",
    cI: "^^^^ Unknown Error Location ^^^^",
    cJ: "^--- Possible Error Location",
    cK: "",
    cL: "",
    cM: "",
    cN: "",
    cO: "",
    cP: "You must provide a name for the change tracker.",
    cQ: "YEARS()",
    cR: "YEARS",
    cS: "WEEKS()",
    cT: "WEEKS",
    cU: "Unknown type of query: ",
    cV: "Unknown type of operator! Operator is: ",
    cW: "Unknown type of Table: ",
    cX: "Unknown table reference: ",
    cY: "Unknown table reference '",
    cZ: "Unknown column reference: ",
    c$: "Unknown Function: ",
    c_: "Unknown Column Reference: ",
    da: "Unable to track changes to unknown table: ",
    dc: "Unable to parse Expression:  Missing End Parenthesis.",
    dd: "Unable to parse Expression.",
    de: "Unable to open IndexedDB database to store data.",
    df: "Unable to initialize the SequelSphere Database.  Error Message: ",
    dg: "Unable to find the end of the WITH Clause.  Are you missing a comma or SELECT?",
    dh: "Unable to find keyword 'BY' after 'ORDER'.  (ORDER BY Clause should be 'ORDER BY ...')",
    di: "Unable to find keyword 'BY' after 'GROUP'.  (GROUP BY Clause should be 'GROUP BY ...')",
    dj: "Unable to find ending ')' in WHERE clause.",
    dk: "Unable to find column '",
    dl: "Unable to find 'WHERE' in the query.",
    dm: "Unable to find 'SELECT' in the query.",
    dn: "Unable to find 'ORDER' in the query.  ** snicker **",
    dp: "Unable to find 'HAVING' in the query.",
    dq: "Unable to find 'GROUP' in the query.",
    dr: "Unable to find 'FROM' in the query.",
    ds: "Unable to find ')' to end the 'VALUES' row.",
    du: "Unable to find ')' to end the 'VALUES' clause.",
    dv: "Unable to find '(' to begin the 'VALUES' row.",
    dw: "Unable to find '(' to begin the 'VALUES' clause.",
    dx: "Unable to determine reference: ",
    dy: "Unable to determine end of parameter list for '",
    dz: "Unable to determine Expression.",
    dA: "Tracking changes to Tracker tables is not allowed!",
    dB: "The table '",
    dC: "The number of columns named does not match the number of columns in the Select.",
    dD: "The expression 'NOT EXISTS ( SELECT ... )' requires parenthesis around the subselect statement.",
    dE: "The expression 'NOT ( condition )' requires parenthesis around the condition.",
    dF: "The expression 'EXISTS ( SELECT ... )' requires parenthesis around the subselect statement.",
    dG: "The column '",
    dH: "The PersistenceScope of a Table can not be greater than the PersistenceScope of the catalog.",
    dI: "The Change Tracker named '",
    dJ: "The 'USING' clause requires one or more column references.",
    dK: "TIMESTAMP",
    dL: "THEN",
    dM: "SequelSphereDB",
    dN: "SSVersion",
    dO: "SSTable",
    dP: "SSCatalog",
    dQ: "SQL Error:  Unexpected end to the query.  Is it missing a parenthesis ')' ?",
    dR: "SETS",
    dS: "SELECT tracker_name, tracker_table, is_tracking, table_info FROM ",
    dT: "SELECT id, action, table_name, row_values FROM ",
    dU: "SELECT count(*) FROM ",
    dV: "SELECT MAX(id) FROM ",
    dW: "SELECT * FROM ",
    dX: "SECONDS()",
    dY: "SECONDS",
    dZ: "ROLLUP",
    d$: "Parse Exception",
    d_: "PK",
    ea: "Not a valid query name: ",
    eb: "Not a valid column name: ",
    ec: "No column definitions in the 'SELECT' clause.",
    ed: "No SQL to Execute.",
    ee: "NULL",
    ef: "NOT ",
    eg: "NOPK",
    eh: "Missing the 'AS' between query name and definition.",
    ei: "Missing the '(' for the query definition.",
    ej: "Missing ending Parenthesis for column definitions.",
    ek: "Missing 'ON' or 'USING' keyword for table join in 'FROM' clause",
    el: "MONTHS()",
    em: "MONTHS",
    en: "MINUTES()",
    eo: "MINUTES",
    ep: "MILLIS()",
    eq: "MILLIS",
    er: "Invalid expression for a 'VALUES' clause.",
    es: "Invalid ending of a column definition in the 'SELECT' clause.",
    et: "Invalid end to Select statement.",
    eu: "Invalid end to FROM clause: ",
    ev: "Invalid end to '",
    ew: "Invalid column reference in '",
    ex: "Invalid alias for a column definition in the 'SELECT' clause.",
    ey: "Invalid ORDER BY expression.  For 'UNION'd SELECTs, you must reference a column by number or alias.",
    ez: "Invalid ORDER BY Direction: '",
    eA: "Invalid ORDER BY Clause.  Commas (',') are required for seperating expressions.",
    eB: "Invalid Expression within a VALUES Clause.",
    eC: "Invalid Expression for VALUES Clause.",
    eD: "Invalid End to the Query: ",
    eE: "Invalid Condition.",
    eF: "Invalid Column Definition",
    eG: "Invalid CASE Statement.  Expecting either 'WHEN', 'ELSE', or 'END'.",
    eH: "Invalid CASE Statement.  Expecting 'THEN' after 'WHEN'.",
    eI: "Invalid 'IS NULL' or 'IS NOT NULL' operator.",
    eJ: "Invalid 'FROM' clause syntax: ",
    eK: "IndexedDB error: ",
    eL: "IS",
    eM: "IS NULL",
    eN: "IS NOT NULL",
    eO: "HOURS()",
    eP: "HOURS",
    eQ: "GROUPING",
    eR: "GRAND-TOTAL",
    eS: "Function COUNT(*) should have no other parameters.",
    eT: "Expected a non-null value for ",
    eU: "Expected a defined value for ",
    eV: "Every SELECT joined by set operations (UNION, INTERSECT, EXCEPT) must have the same number of columns.",
    eW: "Error in WITH clause; ",
    eX: "END",
    eY: "ELSE",
    eZ: "DAYS()",
    e$: "DAYS",
    e_: "DATE",
    fa: "CURRENT",
    fb: "CUBE",
    fc: "COUNT",
    fd: "CASE",
    fe: "Ambiguous Column Reference: ",
    ff: "Ambiguous Column Reference.",
    fg: "Aggregate Functions (",
    fh: "A row with that Primary Key already exists.",
    fi: "A query with name '",
    fj: "A change tracker with the name '",
    fk: "A Change Tracker MUST track at least one table.",
    fl: ":<br/>",
    fm: ".*",
    fo: ".  Try a number 1 thru ",
    fp: ".  There are only ",
    fq: "-4",
    fr: ") can not be used here.",
    ft: "'SUM'.",
    fu: "'SUBSTRING'.",
    fv: "'STDDEV'.",
    fw: "'MIN'.",
    fx: "'MAX'.",
    fy: "'GROUPING SET' requires parenthesis around it's arguments: GROUPING SET (...)",
    fz: "'AVG'.",
    fA: "'.  Is it missing a ')'?",
    fB: "'.  Expecting either 'ASC' or 'DESC'.",
    fC: "', requires ",
    fD: "', '",
    fE: "')",
    fF: "'!",
    fG: "' has already been specified in the WITH clause.",
    fH: "' from USING clause in both joined entities.",
    fI: "' does not track table: ",
    fJ: "' because it has no primary key to identify the updated row.",
    fK: "' already exists.",
    fL: "' already exists in the table '",
    fM: "' already exists in the database!",
    fN: "&#00;",
    fO: " were supplied.",
    fP: " columns, but ",
    fQ: " columns returned.",
    fR: " cannot be performed on table '",
    fS: " at token ",
    fT: " WHERE tracker_name = '",
    fU: " WHERE table_name IN ('",
    fV: " WHERE table_name = '",
    fW: " ORDER BY id",
    fX: " . ",
    fY: " (Specify the exact table)",
    fZ: " (No applicable table has this column)"
};
(function () {
    var b = !1,
        a = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    this.Class = function () {}, Class.extend = function (c) {
        function h() {
            !b && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype;
        b = !0;
        var f = new this;
        b = !1;
        for (var g in c) f[g] = typeof c[g] == d.i && typeof e[g] == d.i && a.test(c[g]) ?
            function (a, b) {
                return function () {
                    var c = this._super;
                    this._super = e[a];
                    var d = b.apply(this, arguments);
                    this._super = c;
                    return d
                }
            }(g, c[g]) : c[g];
        h.prototype = f, h.constructor = h, h.extend = arguments.callee;
        return h
    }
})();
var Exception = Class.extend({
    init: function (a) {
        this.pw = a
    },
    getMessage: function () {
        return this.pw
    },
    getVerboseErrorMessage: function () {
        return this.getMessage()
    },
    toString: function () {
        return this.getMessage()
    }
});
(function () {
    function ce(a) {
        return window.setTimeout(a, 0)
    }
    function by(a) {
        var b = {};
        for (var c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }
    function h(a) {
        var c = a.replace(/^\s\s*/, ""),
            b = c.length;
        while (/\s/.test(c.charAt(--b)));
        return c.slice(0, b + 1)
    }
    var l = -1,
        cr = 0,
        x = 1,
        bY = 2,
        b = 0,
        cj = 1,
        a = 2,
        bX = d.cz,
        z = bX + d.co,
        A = bX + d.cD,
        cg = bX + d.cE,
        bz = bX + d.cl,
        Z = {
            SCOPE_DEFAULT: l,
            SCOPE_PAGE: cr,
            SCOPE_SESSION: x,
            SCOPE_LOCAL: bY
        },
        bm = Class.extend({
            init: function () {
                this.jD = [d.bL, d.cN, d.cM, d.cL, d.cK]
            },
            cL: function (a, b) {
                return b.split(this.jD[a])
            },
            cM: function (b, a) {
                return a.join(this.jD[b])
            },
            dU: function () {
                return d.bL
            },
            kE: function () {
                var c = bX + d.cr,
                    b = this.jD.join(","),
                    f = [window.localStorage, window.sessionStorage];
                for (var g = 0; g < f.length; ++g) try {
                    f[g].setItem(c, b);
                    var h = f[g].getItem(c);
                    f[g].removeItem(c);
                    if (h != b) return !1
                } catch (a) {
                    try {
                        f[g].removeItem(c)
                    } catch (e) {}
                    return !1
                }
                return !0
            }
        }),
        N = Class.extend({
            init: function () {},
            cL: function (f, b) {
                if (b == "N") return null;
                var g = [];
                if (b != ":") {
                    var e = b.indexOf(":"),
                        c = b.substr(0, e).split(",");
                    ++e;
                    for (var d = 0; d < c.length; ++d) if (c[d] == "N") g.push(null);
                    else {
                        var a = parseInt(c[d]);
                        g.push(b.substr(e, a)), e += a
                    }
                }
                return g
            },
            cM: function (c, d) {
                if (d == null) return "N";
                if (d.length == 0) return ":";
                var b = [];
                for (var a = 0; a < d.length; ++a) b.push(d[a] == null ? "N" : d[a].toString().length);
                return [b.join(","), ":", d.join("")].join("")
            },
            dU: function () {
                return null
            },
            kE: function () {
                return !0
            }
        }),
        bd = null,
        bx = Class.extend({
            init: function () {
                this.hu = [new bm]
            },
            cL: function (a, b) {
                return this.jh().cL(a, b)
            },
            cM: function (b, a) {
                return this.jh().cM(b, a)
            },
            dU: function () {
                return this.jh().dU()
            },
            jh: function () {
                var c = this.pl();
                if (c == null) {
                    for (var a = 0; !c && a < this.hu.length; ++a) {
                        var b = this.hu[a];
                        b.kE() && (c = b, this.ke(a.toString()))
                    }
                    c || (c = new N, this.ke(d.bF))
                }
                bd = c;
                return bd
            },
            pl: function () {
                try {
                    var a = bX + d.bR,
                        b = window.localStorage[a];
                    if (b != null) {
                        if (b == d.bF) return new N;
                        b = parseInt(b);
                        if (!isNaN(b) && b < this.hu.length) return this.hu[b]
                    }
                } catch (c) {}
                return null
            },
            ke: function (a) {
                try {
                    var b = bX + d.bR;
                    window.localStorage[b] = a
                } catch (c) {}
            }
        });
    bd = new bx;
    var bN = Class.extend({
            init: function () {
                this.cn.ABSVAL = this.cn.ABS, this.cn.CEIL = this.cn.CEILING, this.cn.SUBSTR = this.cn.SUBSTRING, this.cn.TRUNC = this.cn.TRUNCATE, this.cn.VALUE = this.cn.COALESCE, this.cn.GUID = this.cn.UUID, this.eJ.STD = this.eJ.STDDEV
            },
            lJ: {},
            cn: {
                ABS: function (a) {
                    return typeof a == d.a && a < 0 ? -a : a
                },
                CEILING: function (a) {
                    return typeof a == d.a ? Math.ceil(a) : a
                },
                FLOOR: function (a) {
                    return typeof a == d.a ? Math.floor(a) : a
                },
                ROUND: function (c, a) {
                    if (typeof c != d.a) return c;
                    var b = a == null || typeof a != d.a ? 1 : Math.pow(10, a);
                    return Math.round(c * b) / b
                },
                TRUNCATE: function (c, a) {
                    if (typeof c != d.a) return c;
                    var b = a == null || typeof a != d.a ? 1 : Math.pow(10, a);
                    return (c >= 0 ? Math.floor(c * b) : Math.ceil(c * b)) / b
                },
                ASCII: function (a) {
                    if (a == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.length == 0 ? null : a.charCodeAt(0)
                },
                CHAR: function () {
                    if (arguments.length == 0) return null;
                    if (arguments.length == 1 && arguments[0] == null) return null;
                    return String.fromCharCode.apply(this, arguments)
                },
                CONCAT: function () {
                    if (arguments.length == 0) return null;
                    if (arguments.length == 1 && arguments[0] == null) return null;
                    var a = [];
                    for (var b = 0; b < arguments.length; ++b) a.push(arguments[b]);
                    return a.join("")
                },
                CONCAT_WS: function () {
                    if (arguments.length < 2) return null;
                    var a = [];
                    for (var b = 1; b < arguments.length; ++b) a.push(arguments[b]);
                    return a.join(arguments[0])
                },
                IF: function (a, b, c) {
                    if (a) return b;
                    return c
                },
                INSTR: function (a, b) {
                    if (a == null || b == null) return null;
                    return 1 + b.indexOf(a)
                },
                LEFT: function (a, b) {
                    if (a == null || b == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.substr(0, b)
                },
                LENGTH: function (a) {
                    if (a == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.length
                },
                LOWER: function (a) {
                    if (a == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.toLowerCase()
                },
                LPAD: function (a, e, c) {
                    if (a == null || e == null || typeof e != d.a) return null;
                    typeof a != d.b && (a = String(a)), c == null ? c = d.K : (typeof c != d.b && (c = String(c)), c.length == 0 && (c = d.K));
                    var b = a.length,
                        f = [];
                    while (b < e) f.push(c), b += c.length;
                    f.push(a), a = f.join("");
                    return a.slice(-e)
                },
                LTRIM: function (a) {
                    if (a == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.replace(/^\s\s*/, "")
                },
                RIGHT: function (a, b) {
                    if (a == null || b == null) return null;
                    typeof a != d.b && (a = String(a));
                    return b <= 0 ? "" : b >= a.length ? a : a.slice(-b)
                },
                RPAD: function (a, e, c) {
                    if (a == null || e == null || typeof e != d.a) return null;
                    typeof a != d.b && (a = String(a)), c == null ? c = d.K : (typeof c != d.b && (c = String(c)), c.length == 0 && (c = d.K));
                    var b = a.length,
                        f = [a];
                    while (b < e) f.push(c), b += c.length;
                    a = f.join("");
                    return a.slice(0, e)
                },
                RTRIM: function (b) {
                    if (b == null) return null;
                    typeof b != d.b && (b = String(b));
                    var a = b.length;
                    while (/\s/.test(b.charAt(--a)));
                    return b.slice(0, a + 1)
                },
                SUBSTRING: function (a, b, e) {
                    if (a == null || b == null) return null;
                    typeof a != d.b && (a = String(a));
                    if (typeof b != d.a || e != null && typeof e != d.a) throw new Exception(d.k + d.fu);
                    var c = b < 0 ? a.length + b : b - 1;
                    if (e == null || c + e > a.length) return a.slice(c);
                    if (e > 0) return a.slice(c, c + e);
                    return ""
                },
                TRIM: function (
                    c) {
                    if (c == null) return null;
                    typeof c != d.b && (c = String(c));
                    var b = c.replace(/^\s\s*/, ""),
                        a = b.length;
                    while (/\s/.test(b.charAt(--a)));
                    return b.slice(0, a + 1)
                },
                UPPER: function (a) {
                    if (a == null) return null;
                    typeof a != d.b && (a = String(a));
                    return a.toUpperCase()
                },
                UUID: function () {
                    var a, b = "";
                    do b += (a = Math.random()).toString(16).substr(2);
                    while (b.length < 30);
                    return [b.substr(0, 8), "-", b.substr(8, 4), d.fq, b.substr(12, 3), "-", ((a * 4 | 0) + 8).toString(16), b.substr(15, 3), "-", b.substr(18, 12)].join("")
                },
                CURRENT_DATE: function () {
                    var a = new Date;
                    return a.getFullYear() + "-" + (a.getMonth() < 9 ? "0" : "") + (a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" : "") + a.getDate()
                },
                CURRENT_TIMESTAMP: function () {
                    return (new Date).toString()
                },
                _date_time_interval_YEARS: function (a) {
                    throw new Exception(d.cQ + d.f)
                },
                _date_time_interval_MONTHS: function (a) {
                    throw new Exception(d.el + d.f)
                },
                _date_time_interval_WEEKS: function (a) {
                    throw new Exception(d.cS + d.f)
                },
                _date_time_interval_DAYS: function (a) {
                    throw new Exception(d.eZ + d.f)
                },
                _date_time_interval_HOURS: function (a) {
                    throw new Exception(d.eO + d.f)
                },
                _date_time_interval_MINUTES: function (a) {
                    throw new Exception(d.en + d.f)
                },
                _date_time_interval_SECONDS: function (a) {
                    throw new Exception(d.dX + d.f)
                },
                _date_time_interval_MILLIS: function (a) {
                    throw new Exception(d.ep + d.f)
                },
                COALESCE: function () {
                    if (arguments.length == 0) return null;
                    for (var a = 0; a < arguments.length; ++a) if (arguments[a] != null) return arguments[a];
                    return null
                },
                ISNULL: function (a) {
                    return a == null ? 1 : 0
                },
                NULLIF: function (a, b) {
                    return a == null || b == null || a === b ? null : a
                }
            },
            eJ: {
                AVG: function (e) {
                    var b = 0,
                        a = 0;
                    if (e != null) for (var c = 0; c < e.length; ++c) if (e[c] != null) {
                        ++a;
                        if (typeof e[c] == d.a) b += e[c];
                        else throw new Exception(d.k + d.fz)
                    }
                    return a == 0 ? null : b / a
                },
                COUNT: function (b) {
                    var c = 0;
                    if (b != null) for (var a = 0; a < b.length; ++a) b[a] != null && ++c;
                    return c
                },
                MAX: function (b) {
                    var c = null;
                    if (b != null) for (var a = 0; a < b.length; ++a) if (b[a] != null) {
                        if (typeof b[a] != d.a) throw new Exception(d.k + d.fx);
                        if (c == null || c < b[a]) c = b[a]
                    }
                    return c
                },
                MIN: function (b) {
                    var c = null;
                    if (b != null) for (var a = 0; a < b.length; ++a) if (b[a] != null) {
                        if (typeof b[a] != d.a) throw new Exception(d.k + d.fw);
                        if (c == null || c > b[a]) c = b[a]
                    }
                    return c
                },
                STDDEV: function (h) {
                    var f = 0;
                    if (h != null) {
                        var e = 0,
                            a = 0;
                        for (var c = 0; c < h.length; ++c) if (h[c] != null) {
                            ++a;
                            if (typeof h[c] == d.a) e += h[c];
                            else throw new Exception(d.k + d.fv)
                        }
                        if (a > 0) {
                            var b = e / a,
                                g = 0;
                            for (var c = 0; c < h.length; ++c) h[c] != null && (g += (h[c] - b) * (h[c] - b));
                            f = Math.sqrt(g / a)
                        }
                    }
                    return f
                },
                SUM: function (b) {
                    var a = null;
                    if (b != null) for (var c = 0; c < b.length; ++c) if (b[c] != null) {
                        a == null && (a = 0);
                        if (typeof b[c] == d.a) a += b[c];
                        else throw new Exception(d.k + d.ft)
                    }
                    return a
                }
            },
            hasFunction: function (a) {
                return this.la(a.toUpperCase()) != null
            },
            la: function (a) {
                return this.lJ[name] || this.cn[a] || this.eJ[a] || null
            },
            k_: function (a) {
                if (typeof this.lJ[a] == d.i) return 0;
                if (typeof this.cn[a] == d.i) return 1;
                if (typeof this.eJ[a] == d.i) return 2;
                return -1
            },
            addScalarFunction: function (b, a) {
                this.cn[b.toUpperCase()] = a
            },
            addAggregateFunction: function (b, a) {
                this.eJ[b.toUpperCase()] = a
            },
            dropFunction: function (c) {
                var b = c.toUpperCase(),
                    a = this.k_(b);
                a == 1 && delete this.cn[b], a == 2 && delete this.eJ[b]
            }
        }),
        p = new bN,
        bb = Class.extend({
            init: function () {
                this.eh = 100, this.ju = 100, this.cC = cr, this.b_ = !1, this.bs = [], this.ea = {}, this.functions = p, this.jx = {}
            },
            nV: function () {
                return this.eh++
            },
            nW: function () {
                return this.ju++
            },
            dF: function () {
                return this.getPersistenceScope()
            },
            isPersistenceScopeAvailable: function (a) {
                return Z.eT.nE(a)
            },
            getPersistenceScope: function () {
                if (typeof this.cD != d.e) return this.cD;
                return this.cC
            },
            setPersistenceScope: function (a) {
                a == l && (a = cr);
                if (this.cC != a) {
                    this.cD = a, this.b_ = !0;
                    for (var b = 0; b < this.bs.length; ++b) {
                        var c = this.bs[b],
                            e = c.getPersistenceScope();
                        e == l ? c.b_ = !0 : e > a && c.setPersistenceScope(a)
                    }
                } else typeof this.cD != d.e && delete this.cD
            },
            getAllTables: function () {
                return this.bs.slice(0)
            },
            getTable: function (a) {
                return this.bs[this.ea[a.toUpperCase()]]
            },
            createTables: function (b) {
                for (var a = 0; a < b.length; ++a) this.createTable(b[a])
            },
            createTable: function (e) {
                if (!this.kF(e[d.c])) throw new Exception(d.bQ + f + d.cb);
                for (var a = 0; a < e.columns.length; ++a) if (!this.kF(e.columns[a])) throw new Exception(d.bQ + f + d.cb);
                var f = e[d.c].toUpperCase();
                if (this.ea[f] != null) throw new Exception(d.dB + f + d.fM);
                var c = new M(this, this.nV(), f);
                for (var a = 0; a < e.columns.length; ++a) {
                    var b = e.columns[a].toUpperCase();
                    c.createColumn(b, 1, -1, !0)
                }
                e.primaryKey instanceof Array && (c.pk = new bZ(c, e.primaryKey)), e.data instanceof Array && c.replaceData(e.data), typeof e.dO == d.a && c.setPersistenceScope(e.dO), this.ea[c[d.c]] = this.bs.length, this.bs.push(c), this.b_ = !0
            },
            dropTable: function (a) {
                var e = a.toUpperCase(),
                    c = this.ea[e];
                this.jx[e] = e;
                if (typeof c == d.a) {
                    this.bs.splice(c, 1), this.ea = {};
                    for (var b = 0; b < this.bs.length; ++b) this.ea[this.bs[b][d.c]] = b
                }
                this.b_ = !0
            },
            nx: function (b) {
                for (var a = 0; a < b.bs.length; ++a) this.ea[b.bs[a][d.c]] || this.createTable(b.bs[a].nS())
            },
            kF: function (a) {
                return a != null && a.match(/^[a-zA-Z]\w+$/) != null
            }
        }),
        M = Class.extend({
            init: function (b, a, c) {
                this.gn = b, this.bX = a, this[d.c] = c, this.hS = "T", this.columns = [], this.G = {}, this.data = [], this.pk = null, this.cC = l, this.b_ = !1
            },
            nS: function () {
                var b = this,
                    a = {
                        tableName: b[d.c],
                        columns: b.getColumnNames(),
                        dO: b.cC,
                        data: b.data
                    };
                !b.pk || (a.primaryKey = b.pk.getColumnNames());
                return a
            },
            getColumnNames: function () {
                var b = [];
                for (var a = 0; a < this.columns.length; ++a) b.push(this.columns[a].O);
                return b
            },
            getPrimaryKey: function () {
                return !this.pk ? [] : this.pk.getColumnNames()
            },
            dF: function () {
                return this.cC == l ? this.gn.getPersistenceScope() : this.getPersistenceScope()
            },
            getPersistenceScope: function () {
                if (typeof this.cD != d.e) return this.cD;
                return this.cC
            },
            setPersistenceScope: function (a) {
                if (this.cC != a) {
                    if (a > this.gn.getPersistenceScope()) throw new Exception(d.dH);
                    this.cD = a, this.b_ = !0
                } else typeof this.cD != d.e && delete this.cD
            },
            createColumn: function (a, e, f, b) {
                if (this.G[a] != null) throw new Exception(d.dG + a + d.fL + this[d.c] + d.fF);
                var g = this.columns.length,
                    c = new bA(this, this.gn.nW(), g, a, e, f, b);
                this.G[a] = g, this.columns.push(c), this.b_ = !0
            },
            insertRow: function (a) {
                var b = this.je(d.bC, a);
                a === b && (b = b.slice(0)), this.pk && this.pk.pu(b), this.data.push(b), this.b_ = !0, !this.bI || this.gU("I", b), !this.gT || this.gV(this.gT, a);
                return 1
            },
            updateRow: function (e) {
                var c = this.je(d.M, e),
                    b = this.pk.kW(this.pk.hf(c));
                if (typeof b != d.e && !! b) {
                    for (var a = 0; a < c.length; ++a) b[a] = c[a];
                    this.b_ = !0, !this.bI || this.gU("U", b), !this.gS || this.gV(this.gS, c);
                    return 1
                }
                return 0
            },
            deleteRow: function (g) {
                var h = 0,
                    e = this.je(d.v, g);
                if (this.pk) {
                    var b = this.pk.kW(this.pk.hf(e));
                    for (var f = 0; f < this.data.length; ++f) if (this.data[f] == b) {
                        this.data.splice(f, 1), this.pk.mY(b), ++h, this.b_ = !0, !this.bI || this.gU("D", b), !this.fb || this.gV(this.fb, b);
                        break
                    }
                } else {
                    var i = this.columns.length;
                    for (var f = 0; f < this.data.length; ++f) {
                        var a = !0;
                        for (var c = 0; a && c < i; ++c) a = this.data[f][c] == e[c];
                        if (a) {
                            var b = this.data[f];
                            this.data.splice(f, 1), ++h, this.b_ = !0, !this.bI || this.gU("D", b), !this.fb || this.gV(this.fb, b), --f
                        }
                    }
                }
                return h
            },
            je: function (l, f) {
                if (typeof f === d.e) throw new Exception(d.n + l + d.cf + typeof f + ".");
                var i = f instanceof Array ? f : null;
                if (i && l === d.v && this.pk && i.length == this.pk.di.length && f.length != this.qp.length) {
                    var c = i;
                    i = [];
                    for (var j = 0; j < this.columns.length; ++j) i.push(qf);
                    for (var k = 0; k < c.length; ++k) i[this.di[k]] = c[k]
                }
                if (!i) {
                    if (typeof f !== d.bz) throw new Exception(d.n + l + d.cf + typeof f + ".");
                    i = [];
                    for (var j = 0; j < this.columns.length; ++j) {
                        var h = this.columns[j].O,
                            g = f[h];
                        i.push(g)
                    }
                }
                if (l === d.M && !this.pk) throw new
                    Exception(l + d.fR + this[d.c] + d.fJ);
                var m = l !== d.v || !this.pk ? this.columns.length : i.length < this.columns.length ? this.pk.di.length : this.columns.length;
                if (i.length != m) throw new Exception(d.n + l + d.bo + d.A + this[d.c] + d.fC + m + d.fP + i.length + d.fO);
                var e = this.nU(l);
                for (var j = 0; j < e.length; ++j) switch (e[j]) {
                    case b:
                        break;
                    case cj:
                        if (typeof i[j] === d.e) throw new Exception(d.n + l + d.bo + d.eU + d.bI + this.columns[j].O + d.ce + j + ")" + d.by + this[d.c] + d.ca + d.bu + i[j] + ".");
                        break;
                    case a:
                        if (typeof i[j] === d.e || i[j] == null) throw new Exception(d.n + l + d.bo + d.eT + d.bI + this.columns[j].O + d.ce + j + ")" + d.by + this[d.c] + d.ca + d.bu + i[j] + ".")
                }
                return i
            },
            nU: function (f) {
                var e = f + "_" + (this.pk != null ? d.d_ : d.eg);
                this.ib || (this.ib = {});
                var c = this.ib[e];
                c = typeof c !== d.e ? c : null;
                if (!c) {
                    c = [];
                    var i = f === d.bC || f === d.M || f === d.v && !this.pk ? cj : b;
                    for (var g = 0; g < this.columns.length; ++g) c.push(i);
                    if (this.pk) for (var h = 0; h < this.pk.di.length; ++h) {
                        var g = this.pk.di[h];
                        c[g] = a
                    }
                    this.ib[e] = c
                }
                return c
            },
            replaceData: function (b) {
                this.data = [], this.pk && this.pk.pj();
                for (var a = 0; a < b.length; ++a) this.insertRow(b[a]);
                this.b_ = !0
            },
            pt: function (a) {
                this.bI || (this.bI = {}), this.bI[a.name] = a
            },
            mX: function (a) {
                !this.bI || this.bI[a.name] != null && (delete this.bI[a.name], this.bI.length == 0 && (this.bI = null))
            },
            gU: function (b, a) {
                for (var c in this.bI) this.bI[c].mZ(this[d.c], b, a)
            },
            oninsert: function (a) {
                !a || (this.gT || (this.gT = []), this.gT.push(a))
            },
            onupdate: function (a) {
                !a || (this.gS || (this.gS = []), this.gS.push(a))
            },
            ondelete: function (a) {
                !a || (this.fb || (this.fb = []), this.fb.push(a))
            },
            gV: function (b, c) {
                for (var a = 0; a < b.length; ++a) b[a](this[d.c], c)
            }
        }),
        bA = Class.extend({
            init: function (g, c, e, b, f, a, d) {
                this.cb = g, this.bX = g.bX, this.hp = c, this.ez = e, this.O = b, this.fq = f, this.fr = a, this.fy = d
            }
        }),
        bZ = Class.extend({
            init: function (b, c) {
                this.cb = b, this.di = [];
                for (var a = 0; a < c.length; ++a) this.di.push(this.cb.G[c[a].toUpperCase()]);
                this.gf = {}
            },
            getColumnNames: function () {
                var b = [];
                for (var a = 0; a < this.di.length; ++a) b.push(this.cb.columns[this.di[a]].O);
                return b
            },
            pu: function (b) {
                var a = this.hf(b);
                if (this.gf[a] != null) throw new Exception(d.fh);
                this.gf[a] = b
            },
            mY: function (b) {
                var a = this.hf(b);
                this.gf[a] = null
            },
            hf: function (c) {
                if (this.di.length <= 1) return c[this.di[0]];
                var b = [];
                for (var a = 0; a < this.di.length; ++a) b.push(c[this.di[a]]);
                return b.join(d.fN)
            },
            kW: function (a) {
                return this.gf[a]
            },
            pj: function () {
                this.gf = {}
            }
        }),
        G = Class.extend({
            init: function () {},
            eD: function () {
                return !1
            },
            dV: function (a) {},
            ec: function (a, b) {},
            fT: function (a) {},
            gk: function (b, a) {},
            e$: function (c, a, b) {},
            eX: function (b, a) {},
            o$: function (b) {
                var f = [];
                for (var c = 0; c < b.bs.length; ++c) {
                    var g = b.bs[c];
                    if (g.dF() > cr) {
                        var e = {};
                        e[d.O] = g.bX, e[d.bt] = g.tableName, e[d.s] = g.getPersistenceScope(), f.push(e)
                    }
                }
                var a = {};
                a[d.bA] = b.eh, a[d.bB] = b.ju, a[d.N] = f, a[d.bx] = b.dF();
                return a
            },
            oY: function (b, a) {
                if (a == d.g) return this.oX(b);
                return null
            },
            oX: function (f) {
                var e = [];
                for (var c = 0; c < f[d.N].length; ++c) {
                    var a = f[d.N][c];
                    e.push({
                        bX: a[d.O],
                        D: a[d.bt],
                        dO: a[d.s]
                    })
                }
                var b = new bb;
                b.jv = {
                    ku: f[d.bA],
                    ns: f[d.bB],
                    hP: e
                }, b.cC = f[d.bx];
                return b
            },
            oK: function (g) {
                var f = [];
                for (var e = 0; e < g.columns.length; ++e) {
                    var c = g.columns[e],
                        b = {};
                    b[d.cC] = c.hp, b[d.cq] = c.ez, b[d.bJ] = c.O, b[d.cA] = c.fq, b[d.cB] = c.fr, b[d.cF] = c.fy ? "1" : "0", f.push(b)
                }
                var a = {};
                a[d.O] = g.bX, a[d.c] = g.tableName, a[d.s] = g.cC, a[d.bs] = g.hS, a[d.bw] = g.pk ? g.pk.getColumnNames() : null, a[d.bH] = f, a[d.bG] = g.data;
                return a
            },
            oW: function (b, a) {
                if (a == d.g) return this.oV(b, a);
                return null
            },
            oV: function (a, b) {
                var e = {
                    bX: a[d.ck],
                    tableName: a[d.c],
                    dO: a[d.s],
                    hS: a[d.bs],
                    primaryKey: a[d.bw],
                    columns: a[d.bH],
                    data: a[d.bG]
                };
                for (var c = 0; c < e.columns.length; ++c) e.columns[c] = e.columns[c][d.bJ];
                return e
            },
            fi: function () {
                return d.g
            },
            oZ: function (a) {
                var b = [bd.cM(2, [a.eh, a.ju, a.dF()])];
                for (var c = 0; c < a.bs.length; ++c) {
                    var d = a.bs[c];
                    d.dF() > cr && b.push(bd.cM(2, [d.bX, d.tableName, d.getPersistenceScope()]))
                }
                return bd.cM(1, b)
            },
            oU: function (a, b) {
                if (b == d.g) return this.oT(a);
                return null
            },
            oT: function (b) {
                var a = null,
                    h = bd.cL(1, b);
                if (h && h.length) {
                    a = new bb;
                    var g = [];
                    for (var d = 1; d < h.length; ++d) {
                        var e = bd.cL(2, h[d]),
                            f = {
                                bX: e[0],
                                D: e[1],
                                dO: parseInt(e[2])
                            };
                        g.push(f)
                    }
                    var c = bd.cL(2, h[0]);
                    a.jv = {
                        ku: parseInt(c[0]),
                        ns: parseInt(c[1]),
                        hP: g
                    }, c.length > 2 && (a.cC = parseInt(c[2]))
                }
                return a
            },
            oJ: function (a) {
                return bd.cM(1, [this.oL(a), this.oM(a)])
            },
            oS: function (
                b, a) {
                if (a == d.g) return this.oN(b, a);
                return null
            },
            oN: function (d, a) {
                var b = bd.cL(1, d),
                    c = this.oP(b[0], a);
                c.data = this.oR(b[1], a);
                return c
            },
            oL: function (d) {
                var b = [d.bX, d.tableName, d.cC, d.hS, d.pk ? bd.cM(3, d.pk.getColumnNames()) : ""];
                for (var c = 0; c < d.columns.length; ++c) {
                    var a = d.columns[c];
                    b.push(bd.cM(3, [a.hp, a.ez, a.O, a.fq, a.fr, a.fy ? "1" : "0"]))
                }
                return bd.cM(2, b)
            },
            oP: function (b, a) {
                if (a == d.g) return this.oO(b);
                return null
            },
            oO: function (c) {
                var a = bd.cL(2, c),
                    b = {
                        bX: a[0],
                        tableName: a[1],
                        dO: parseInt(a[2]),
                        columns: []
                    };
                a[4] && a[4].length && (b.primaryKey = bd.cL(3, a[4]));
                for (var d = 5; d < a.length; ++d) b.columns.push(bd.cL(3, a[d])[2]);
                return b
            },
            oM: function (h) {
                var e = [];
                for (var a = 0; a < h.columns.length; ++a) {
                    var b = null;
                    for (var c = 0; c < h.data.length; ++c) if (h.data[c][a] != null && h.data[c][a] != bd.dU()) {
                        b = typeof h.data[c][a], b == d.bz && h.data[c][a] instanceof Date ? b = d.R : b != d.a && b != d.w && (b = d.b);
                        break
                    }
                    e.push(b || d.b)
                }
                var f = [bd.cM(3, e)],
                    g = [];
                for (var c = 0; c < h.data.length; ++c) {
                    for (var a = 0; a < h.columns.length; ++a) h.data[c][a] == null ? g.push(bd.dU()) : e[a] == d.R && h.data[c][a] instanceof
                        Date ? g.push(h.data[c][a].valueOf()) : e[a] == d.w ? g.push(h.data[c][a] ? 1 : 0) : g.push(h.data[c][a]);
                    f.push(bd.cM(3, g)), g.length = 0
                }
                return bd.cM(2, f)
            },
            oR: function (b, a) {
                if (a == d.g) return this.oQ(b);
                return null
            },
            oQ: function (h) {
                var a = [],
                    g = bd.cL(2, h),
                    c = bd.cL(3, g[0]);
                for (var f = 1; f < g.length; ++f) a.push(bd.cL(3, g[f]));
                for (var e = 0; e < c.length; ++e) if (c[e] == d.b) for (var f = 0; f < a.length; ++f) a[f][e] == bd.dU() && (a[f][e] = null);
                else if (c[e] == d.a) for (var f = 0; f < a.length; ++f) try {
                    a[f][e] == bd.dU() ? a[f][e] = null : a[f][e].indexOf(".") > -1 ? a[f][e] = parseFloat(a[f][e]) : a[f][e] = parseInt(a[f][e])
                } catch (b) {
                    a[f][e] = null
                } else if (c[e] == d.w) for (var f = 0; f < a.length; ++f) a[f][e] == bd.dU() || a[f][e].length != 1 ? a[f][e] = null : a[f][e] = a[f][e].charAt(0) == "1";
                else if (c[e] == d.R) for (var f = 0; f < a.length; ++f) try {
                    a[f][e] == bd.dU() ? a[f][e] = null : a[f][e] = new Date(parseInt(a[f][e]))
                } catch (b) {
                    a[f][e] = null
                }
                return a
            }
        }),
        B = G.extend({
            init: function () {
                this.dA = window.localStorage, this.im = d.g
            },
            eD: function () {
                return !!this.dA
            },
            dV: function (b) {
                var a = this.dA[cg],
                    c = a ? this.oU(a, this.fi()) : null;
                b.U(c)
            },
            ec: function (b, a) {
                b == null ? this.dA.removeItem(cg) : (this.dA[cg] = this.oZ(b), this.dA[z] = this.im, this.dA[A] = this.fi()), a.U()
            },
            fT: function (a) {
                this.ec(null, a)
            },
            gk: function (b, a) {
                var d = this.dA[bz + b],
                    c = d == null ? d : this.oS(d, this.fi());
                a.U(c)
            },
            e$: function (c, a, b) {
                a == null ? this.dA.removeItem(bz + c) : this.dA[bz + c] = this.oJ(a), b.U()
            },
            eX: function (b, a) {
                this.e$(b, null, a)
            }
        }),
        bv = B.extend({
            init: function () {
                this._super(), this.dA = window.sessionStorage
            }
        }),
        cs = d.dN,
        cm = d.dP,
        cq = d.dO,
        ci = [cs, cm, cq],
        D = G.extend({
            init: function () {
                this.kO = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.im = d.g
            },
            eD: function () {
                return !!this.kO
            },
            nZ: function (c, a) {
                var b = this;
                if (!this.hX) {
                    var e = this.kO.open(d.dM, 1);
                    e.onerror = function (a) {
                        c.bF(d.de)
                    }, e.onsuccess = function (c) {
                        b.hX = c.target.result, a(b.hX)
                    }, e.onupgradeneeded = function (e) {
                        var g = e.target.result;
                        g.createObjectStore(cm, {
                            keyPath: d.h,
                            lB: !1
                        }), g.createObjectStore(cq, {
                            keyPath: d.h,
                            lB: !1
                        });
                        var a = g.createObjectStore(cs, {
                                keyPath: d.h,
                                lB: !1
                            }),
                            c = {};
                        c[d.h] = z, c[d.bp] = b.im;
                        var f = {};
                        f[d.h] = A, f[d.bp] = b.fi(), a.put(c), a.put(f)
                    }
                } else a(this.hX)
            },
            fh: function (e, c, a, b) {
                this.nZ(a, function (f) {
                    var g = f.transaction(e, c);
                    g.onerror = function (b) {
                        a.bF(d.eK + b.target.qm)
                    }, b(g)
                })
            },
            dV: function (a) {
                var b = this;
                this.fh(cm, d.bv, a, function (c) {
                    c.objectStore(cm).get(cg).onsuccess = function (c) {
                        var e = c.target.result,
                            d = null;
                        !e || (d = b.oY(e, b.fi())), a.U(d)
                    }
                })
            },
            ec: function (c, a) {
                var b = this.o$(c);
                b[d.h] = cg, this.fh(cm, d.r, a, function (c) {
                    c.oncomplete = a.U, c.objectStore(cm).put(b)
                })
            },
            fT: function (a) {
                this.fh(cm, d.r, a, function (b) {
                    b.oncomplete = a.U, b.objectStore(cm)[d.bE](cg)
                })
            },
            gk: function (b, a) {
                var c = this;
                this.fh(cq, d.bv, a, function (d) {
                    d.objectStore(cq).get(b).onsuccess = function (b) {
                        var e = b.target.result,
                            d = null;
                        !e || (d = c.oW(e, c.fi())), a.U(d)
                    }
                })
            },
            e$: function (c, e, a) {
                var b = this.oK(e);
                b[d.h] = c, this.fh(cq, d.r, a, function (c) {
                    c.oncomplete = a.U, c.objectStore(cq).put(b)
                })
            },
            eX: function (b, a) {
                this.fh(cq, d.r, a, function (c) {
                    c.oncomplete = a.U, c.objectStore(cq)[d.bE](b)
                })
            }
        }),
        cb = G.extend({
            init: function () {
                this.dB = this.iV();
                for (var a = this.dB.length - 1; a >= 0; --a) this.dB[a].eD() || this.dB.splice(a, 1)
            },
            iV: function () {
                return [new B]
            },
            eD: function () {
                return this.dB.length > 0
            },
            dV: function (a) {
                var b = this.dB,
                    c = -1,
                    d = {
                        bF: function (b) {
                            a.bF(b)
                        },
                        U: function (e) {
                            e != null ? a.U(e) : (++c, c < b.length ? b[c].dV(d) : a.U(null))
                        }
                    };
                d.U(null)
            },
            ec: function (b, a) {
                this.eD() ? this.dB[0].ec(b, a) : a.U()
            },
            fT: function (a) {
                var c = -1,
                    b = this.dB,
                    d = {
                        bF: function (b) {
                            a.bF(b)
                        },
                        U: function () {
                            ++c, c < b.length ? b[c].fT(d) : a.U()
                        }
                    };
                d.U()
            },
            gk: function (c, a) {
                var d = -1,
                    b = this.dB,
                    e = {
                        bF: function (b) {
                            a.bF(b)
                        },
                        U: function (f) {
                            f != null ? a.U(f) : (++d, d < b.length ? b[d].gk(c, e) : a.U(null))
                        }
                    };
                e.U(null)
            },
            e$: function (c, a, b) {
                this.eD() ? this.dB[0].e$(c, a, b) : b.U(null)
            },
            eX: function (c, a) {
                var d = -1,
                    b = this.dB,
                    e = {
                        bF: function (b) {
                            a.bF(b)
                        },
                        U: function () {
                            ++d, d < b.length ? b[d].eX(c, e) : a.U()
                        }
                    };
                e.U()
            }
        }),
        y = cb.extend({
            init: function () {
                this._super()
            },
            iV: function () {
                return [new D, new B]
            }
        }),
        bt = y.extend({
            init: function () {
                this._super()
            },
            iV: function () {
                return [new bv]
            }
        }),
        bI = Class.extend({
            init: function () {
                this.f_ = new y, this.kc = new bt, this.fC = [null, this.kc, this.f_]
            },
            nE: function (a) {
                return a < x || this.fC[a].eD()
            },
            dV: function (
                a) {
                var b = this;
                this.f_.dV({
                    bF: function (b) {
                        a.bF(b)
                    },
                    U: function (c) {
                        c != null ? b.kP(c, a) : b.kc.dV({
                            bF: function (b) {
                                a.bF(b)
                            },
                            U: function (c) {
                                c != null ? b.kP(c, a) : a.U(null)
                            }
                        })
                    }
                })
            },
            kP: function (b, c) {
                var a = b.jv,
                    f = b.dF(),
                    e = -1,
                    d = this,
                    g = {
                        bF: function (a) {
                            c.bF(a)
                        },
                        U: function (i) {
                            if (i != null && i.tableName.length > 0) {
                                b.createTable(i);
                                var j = b.getTable(i.tableName);
                                j.bX = i.bX
                            }++e;
                            if (e >= a.hP.length) b.eh = a.ku, delete b.jv, d.jo(b), c.U(b);
                            else {
                                var k = a.hP[e],
                                    h = k.dO > cr ? k.dO : f;
                                h > 0 ? d.fC[h].gk(k.D, g) : g.U(null)
                            }
                        }
                    };
                g.U(null)
            },
            ec: function (b, a) {
                var c = this;
                this.my(b);
                var d = b.dF();
                this.om(b, {
                    bF: function (b) {
                        a.bF(b)
                    },
                    U: function () {
                        if (d < x) c.jo(b), a.U();
                        else {
                            var e = -1,
                                f = {
                                    bF: function (b) {
                                        a.bF(b)
                                    },
                                    U: function () {
                                        ++e;
                                        if (e >= b.bs.length) c.jo(b), a.U();
                                        else {
                                            var g = b.bs[e],
                                                d = g.dF();
                                            !g.b_ || d < x ? f.U(null) : d > 0 && c.fC[d].e$(g.tableName, g, f)
                                        }
                                    }
                                };
                            b.b_ ? c.fC[d].ec(b, f) : f.U()
                        }
                    }
                })
            },
            my: function (a) {
                var c = {
                    U: function () {},
                    bF: function () {}
                };
                typeof a.cD != d.e && (a.cC == bY && this.f_.fT(c), a.cC = a.cD, delete a.cD);
                for (var b = 0; b < a.bs.length; ++b) {
                    var e = a.bs[b];
                    typeof e.cD != d.e && (e.cC == bY && this.f_.eX(e.tableName, c), e.cC = e.cD, delete e.cD)
                }
            },
            om: function (b, a) {
                var c = this,
                    d = [];
                for (var e in b.jx) b.getTable(e) == null && d.push(e);
                b.jx = {};
                var f = -1,
                    g = 2,
                    h = {
                        bF: function (b) {
                            a.bF(b)
                        },
                        U: function () {
                            g = 3 - g, g == 1 && ++f, f < d.length ? c.fC[g].eX(d[f], h) : a.U()
                        }
                    };
                h.U()
            },
            jo: function (b) {
                b.b_ = !1;
                for (var a = 0; a < b.bs.length; ++a) b.bs[a].b_ = !1
            }
        }),
        bu = Class.extend({
            init: function () {
                this.qg = new G, this.bG = []
            },
            lw: function (b) {
                var c = [];
                for (var a = 0; a < b.length; ++a) c.push(b[a].slice(0));
                return c
            },
            mR: function (a) {
                var c = [];
                for (var b = 0; b < a.bs.length; ++b) {
                    var f = a.bs[b];
                    if (f.dF() == cr) {
                        var d = [];
                        for (var e = 0; e < f.columns.length; ++e) d.push(f.columns[e].O);
                        c.push({
                            bX: f.bX,
                            tableName: f.tableName,
                            dO: f.getPersistenceScope(),
                            primaryKey: f.pk ? f.pk.getColumnNames().slice(0) : null,
                            columns: d,
                            data: this.lw(f.data)
                        })
                    }
                }
                this.bG = c
            },
            mV: function (b) {
                var c = b.eh;
                for (var d = b.bs.length - 1; d >= 0; --d) {
                    var g = b.bs[d];
                    g.dF() == cr && b.dropTable(g.tableName)
                }
                var e = this.bG;
                for (var f = 0; f < e.length; ++f) if (b.getTable(e[f].tableName) == null) {
                    var a = this.lw(e[f].data);
                    b.createTable(e[f]), e[f].data = a
                }
                for (var f = 0; f < e.length; ++f) b.getTable(e[f].tableName).bX = e[f].bX;
                b.eh = c
            }
        }),
        ck = new bu;
    Z.commit = function (a) {
        Z.eT.ec(Z.catalog, {
            U: function () {
                ck.mR(Z.catalog), a && a.onsuccess && a.onsuccess()
            },
            bF: function (b) {
                a && a.onerror && a.onerror(b)
            }
        })
    }, Z.rollback = function (a) {
        Z.eT.dV({
            U: function (b) {
                b == null && (b = new bb), ck.mV(b), Z.catalog = b, Z.changeTrackers.kk(), a && a.onsuccess && a.onsuccess()
            },
            bF: function (b) {
                a && a.onerror && a.onerror(b)
            }
        })
    };
    var r = !1,
        bs = [];
    Z.catalog = new bb, Z.eT = new bI, Z.eT.dV({
        bF: function (a) {
            window.alert(d.df + a)
        },
        U: function (c) {
            c != null && (c.nx(Z.catalog), Z.catalog = c), r = !0;
            var b = bs;
            bs = null;
            for (var a = 0; a < b.length; ++a) b[a]()
        }
    }), Z.onready = function (a) {
        r ? a() : bs.push(a)
    }, Z.onReady = Z.onready, Z.smokeStore = function (d) {
        var b = d == 2 ? new D : new B;
        Z.eT.f_ = b, Z.eT.fC[2] = b, Z.catalog.b_ = !0;
        var a = Z.catalog.getAllTables();
        for (var c = 0; c < a.length; ++c) a[c].b_ = !0
    };
    var br = Class.extend({
            init: function () {}
        }),
        bQ = br.extend({
            init: function () {
                this._super()
            }
        }),
        bG = Class.extend({
            init: function () {},
            b$: function (a, b) {
                if (a == null) return b == null;
                return b == null ? !1 : a.N(b)
            },
            fx: function (a, d) {
                var c = a == null ? 0 : a.length;
                if (c != (d == null ? 0 : d.length)) return !1;
                for (var b = 0; b < c; ++b) if (!a[b].N(d[b])) return !1;
                return !0
            }
        }),
        bg = bG.extend({
            init: function () {
                this.iC = []
            }
        }),
        bw = bG.extend({
            init: function (a, b, c) {
                this.name = a, this.columnNames = b, this.bA = c
            }
        }),
        bq = bG.extend({
            init: function (a) {
                this.bp = a
            },
            N: function (a) {
                return a instanceof bq && this.fx(this.cS, a.cS) && this.b$(this.bp, a.bp)
            }
        }),
        cp = bG.extend({
            init: function () {},
            N: function (a) {
                return a instanceof cp && this.fO == a.fO && this.bp.N(a.bp)
            }
        }),
        bk = bG.extend({
            init: function () {},
            N: function (a) {
                return a instanceof bk && this.dT == a.dT && this.b$(this.eb, a.eb) && this.b$(this.hk, a.hk) && this.b$(this.dI, a.dI) && this.b$(this.fg, a.fg) && this.b$(this.hb, a.hb) && this.b$(this.eP, a.eP)
            }
        }),
        bl = bG.extend({
            init: function (a) {
                this.dX = a
            },
            N: function (a) {
                return a instanceof bl && this.fx(this.dX, a.dX)
            }
        }),
        E = bG.extend({
            init: function (a, b) {
                this.t = a, this.S = b
            },
            N: function (a) {
                return a instanceof E && this.S == a.S && this.b$(this.t, a.t)
            }
        }),
        L = bG.extend({
            init: function (a) {
                this.hQ = a
            },
            N: function (a) {
                return a instanceof L && this.fx(this.hQ, a.hQ)
            }
        }),
        C = bG.extend({
            init: function (b, a, e, d, c) {
                this.ga = b, this.cX = a, this.fR = e, this.eN = d, d ? this.iy = c : this.gD = c
            },
            N: function (a) {
                return a instanceof C && this.cX == a.cX && this.eN == a.eN && this.b$(this.ga, a.ga) && this.b$(this.fR, a.fR) && this.b$(this.iy, a.iy) && this.fx(this.gD, a.gD)
            }
        }),
        n = bG.extend({
            init: function (b, a) {
                b instanceof bq ? this.bA = b : this.D = b, this.S = a
            },
            N: function (a) {
                return a instanceof n && this.D == a.D && this.S == a.S && this.b$(this.bA, a.bA)
            }
        }),
        cn = bG.extend({
            init: function (a) {
                this.dw = a
            },
            N: function (a) {
                return a instanceof cn && this.b$(this.dw, a.dw)
            }
        }),
        K = bG.extend({
            init: function (a) {
                this.ba = a
            },
            N: function (a) {
                return a instanceof K && this.b$(this.ba, a.ba)
            }
        }),
        F = bG.extend({
            init: function (a) {
                this.dw = a
            },
            N: function (a) {
                return a instanceof F && this.b$(this.dw, a.dw)
            }
        }),
        u = bG.extend({
            init: function (a) {
                this.V = a
            },
            N: function (a) {
                return a instanceof u && this.fx(this.V, a.V)
            }
        }),
        bo = bG.extend({
            init: function (a, b) {
                this.t = a, this.gh = b
            },
            N: function (a) {
                return a instanceof bo && this.gh == a.gh && this.b$(this.t, a.t)
            }
        }),
        bn = bG.extend({
            init: function () {},
            cj: function () {
                throw new Exception(d.U + d.cv + d.f)
            },
            X: function (a) {
                throw new Exception(d.U + d.cu + d.f)
            },
            N: function (a) {
                throw new Exception(d.U + d.ct + d.f)
            }
        }),
        be = bn.extend({
            init: function (a, b) {
                this._super(), this.V = [a], this.Y = b
            },
            lF: function (a) {
                this.V.push(this.Y), this.Y = a
            },
            hK: function () {
                return !!this.Y
            },
            fk: function () {
                this.Y != null && this.lF(null), delete this.Y
            },
            cj: function () {
                return this.V
            },
            X: function (b) {
                var c = [];
                for (var a = 0; a < this.V.length; ++a) c[a] = this.V[a].X(b);
                return function () {
                    var b = [];
                    for (var a = 0; a < c.length; ++a) b.push(c[a]());
                    return b
                }
            },
            N: function (b) {
                if (!(b instanceof be)) return !1;
                if (this.V.length != b.V.length) return !1;
                for (var a = 0; a < this.V.length; ++a) if (!this.V[a].N(b.V[a])) return !1;
                return !0
            }
        }),
        H = bn.extend({
            init: function (a) {
                this._super(), this.bA = a
            },
            cj: function () {
                return []
            },
            X: function (a) {
                var b = a.cU.ho(this.bA, a, !0);
                return function () {
                    b.Z();
                    var c = b.bC(),
                        d = null;
                    if (b.W()) {
                        if (c == 1) d = b.bd(0);
                        else {
                            d = [];
                            for (var a = 0; a < c; ++a) d.push(b.bd(a))
                        }
                        if (b.W()) {
                            c == 1 && (d = [d]), d = [d];
                            do {
                                J = [];
                                for (var a = 0; a < c; ++a) J.push(b.bd(a));
                                d.push(J)
                            } while (b.W())
                        }
                    }
                    return d
                }
            },
            N: function (a) {
                return a instanceof
                    H && this.b$(this.bA, a.bA)
            }
        }),
        co = bn.extend({
            init: function (b, a) {
                this._super(), this.R = b, this.t = a
            },
            cj: function () {
                return [this.t]
            },
            X: function (a) {
                var d = a.dk(this);
                if (d != null) return d;
                var b = this.t.X(a),
                    c = this.R;
                if (c == "-") return function () {
                    var a = b();
                    return a == null ? a : -a
                };
                if (c == "~") return function () {
                    var a = b();
                    return a == null ? a : ~a
                };
                if (c == "+") return b;
                return this._super(a)
            },
            N: function (a) {
                if (!(a instanceof co)) return !1;
                if (this.R != a.R) return !1;
                if (!this.t.N(a.t)) return !1;
                return !0
            }
        }),
        P = bn.extend({
            init: function (b, a, c) {
                this._super(), this.bn = b, this.R = a, this.Y = c
            },
            cj: function () {
                return [this.bn, this.Y]
            },
            X: function (b) {
                var e = b.dk(this);
                if (e != null) return e;
                var c = this.bn.X(b),
                    a = this.Y.X(b);
                switch (this.R) {
                    case "*":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b * d
                        };
                    case "/":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b / d
                        };
                    case "%":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b % d
                        };
                    case "+":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b + d
                        };
                    case "-":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b - d
                        };
                    case d.bk:
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b << d
                        };
                    case d.bg:
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b >> d
                        };
                    case "&":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b & d
                        };
                    case "^":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b ^ d
                        };
                    case "|":
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return b | d
                        };
                    case d.L:
                        return function () {
                            var b = c();
                            if (b == null) return null;
                            var d = a();
                            if (d == null) return null;
                            return [b, d].join("")
                        }
                }
                return this._super()
            },
            N: function (a) {
                if (!(a instanceof P)) return !1;
                if (this.R != a.R) return !1;
                if (!this.bn.N(a.bn)) return !1;
                if (!this.Y.N(a.Y)) return !1;
                return !0
            }
        }),
        cf = bn.extend({
            init: function () {
                this._super()
            },
            cj: function () {
                return []
            },
            X: function (a) {
                var b = this.cW;
                return function () {
                    return b
                }
            },
            N: function (a) {
                if (!(a instanceof cf)) return !1;
                if (this.cW != a.cW) return !1;
                return !0
            }
        }),
        v = cf.extend({
            init: function () {
                this._super()
            }
        }),
        bp = v.extend({
            init: function (a) {
                this._super(), this.cW = a
            }
        }),
        Y = v.extend({
            init: function (a) {
                this._super(), this.cW = a
            }
        }),
        bj = cf.extend({
            init: function (a) {
                this._super(), this.cW = a
            },
            qk: function () {
                return this.cW
            }
        }),
        cl = cf.extend({
            init: function (a) {
                this._super(), this.cW = a
            }
        }),
        c = cf.extend({
            init: function (a) {
                this._super(), this.cW = a
            }
        }),
        ch = bn.extend({
            init: function (a, b) {
                this._super(), this.name = a, this.cw = b, this.le = Z.catalog.functions.k_(a)
            },
            cj: function () {
                return this.cw
            },
            X: function (b) {
                var a = Z.catalog.functions.la(this.name);
                a == null && b.cU.bH(d.c$ + this.name, this._);
                var j = b.dk(this);
                if (j != null) return j;
                var c = [],
                    h = null;
                if (this.le == 2) {
                    var e = b.k$();
                    e == null && b.cU.bH(d.fg + this.name + d.fr, this._);
                    var f = e.kZ();
                    e.hM();
                    if (this.cw != null) {
                        for (var g = 0; g < this.cw.length; ++g) {
                            var i = f.lr(this.cw[g], !1, null, e);
                            c[g] = function () {
                                return f.bd(i.u)
                            }
                        }
                        if (this.dT && this.cw.length > 0) {
                            var k = this;
                            h = function (a) {
                                return k.ny(a)
                            }
                        }
                    }
                    e.fN()
                } else if (this.cw != null) for (var g = 0; g < this.cw.length; ++g) c[g] = this.cw[g].X(b);
                return function () {
                    var b = [];
                    for (var d = 0; d < c.length; ++d) b[d] = c[d]();
                    h && (b = h(b));
                    return a.apply(this, b)
                }
            },
            ny: function (a) {
                var e = [];
                for (var b = 0; b < a.length; ++b) e.push([]);
                var d = {};
                for (var c = 0; c < a[0].length; ++c) if (this.lC(a, c, 0, d)) for (var b = 0; b < a.length; ++b) e[b].push(a[b][c]);
                return e
            },
            lC: function (b, f, c, e) {
                var a = b[c][f] || d.cO;
                return c == b.length - 1 ? e[a] ? !1 : e[a] = 1 : this.lC(b, f, c + 1, e[a] || (e[a] = {}))
            },
            N: function (a) {
                return a instanceof ch && this.name == a.name && this.b$(this.dT, a.dT) && this.fx(this.cw, a.cw)
            }
        }),
        O = bn.extend({
            init: function (d, a, b, c) {
                this._super(), this.ct = d, this.cP = a, this.cQ = b, this.cq = c
            },
            cj: function () {
                var a = [];
                this.ct != null && a.push(this.ct), this.cq != null && a.push(this.cq);
                return a.concat(this.cP, this.cQ)
            },
            X: function (f) {
                var g = f.dk(this);
                if (g != null) return g;
                var c = [];
                for (var e = 0; e < this.cP.length; ++e) c.push(this.cP[e].X(f));
                var d = [];
                for (var e = 0; e < this.cQ.length; ++e) d.push(this.cQ[e].X(f));
                var a = this.cq == null ? null : this.cq.X(f);
                if (this.ct == null) return function () {
                    for (var b = 0; b < c.length; ++b) if (c[b]()) return d[b]();
                    if (a != null) return a();
                    return null
                };
                var b = this.ct == null ? null : this.ct.X(f);
                return function () {
                    var f = b();
                    if (f != null) for (var g = 0; g < c.length; ++g) {
                        var e = c[g]();
                        if (e != null && f == e) return d[g]()
                    }
                    if (a != null) return a();
                    return null
                }
            },
            N: function (b) {
                if (!(b instanceof O)) return !1;
                if (this.cP.length != b.cP.length) return !1;
                if (this.cQ.length != b.cQ.length) return !1;
                if (this.ct != null) {
                    if (b.ct == null || !this.ct.N(b.ct)) return !1
                } else if (b.ct != null) return !1;
                if (this.cq != null) {
                    if (b.cq == null || !this.cq.N(b.cq)) return !1
                } else if (b.cq != null) return !1;
                for (var a = 0; a < this.cP.length; ++a) if (!this.cP[a].N(b.cP[a])) return !1;
                for (var a = 0; a < this.cQ.length; ++a) if (!this.cQ[a].N(b.cQ[a])) return !1;
                return !0
            }
        }),
        e = bn.extend({
            init: function () {
                this._super()
            }
        }),
        I = e.extend({
            init: function (b, a, c) {
                this._super(), this.bn = b, this.R = a, this.Y = c
            },
            cj: function () {
                return [this.bn, this.Y]
            },
            X: function (b) {
                var e = b.dk(this);
                if (e != null) return e;
                var c = this.bn.X(b),
                    a = this.Y.X(b);
                switch (this.R) {
                    case d.q:
                        return function () {
                            return c() && a()
                        };
                    case d.W:
                        return function () {
                            return c() || a()
                        };
                    case d.S:
                        return function () {
                            return !c() != !a()
                        }
                }
                return this._super()
            },
            N: function (a) {
                if (!(a instanceof I)) return !1;
                if (this.R != a.R) return !1;
                if (!this.bn.N(a.bn)) return !1;
                if (!this.Y.N(a.Y)) return !1;
                return !0
            }
        }),
        f = e.extend({
            init: function (b, a, c) {
                this._super(), this.bn = b, this.R = a, this.Y = c
            },
            cj: function () {
                return [this.bn, this.Y]
            },
            X: function (f) {
                var i = f.dk(this);
                if (i != null) return i;
                var g = this.bn.X(f),
                    b = this.Y.X(f);
                switch (this.R) {
                    case "=":
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c == a
                        };
                    case d.bn:
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c != a
                        };
                    case d.bi:
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c != a
                        };
                    case "<":
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c < a
                        };
                    case d.bj:
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c <= a
                        };
                    case ">":
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c > a
                        };
                    case d.bh:
                        return function () {
                            var c = g();
                            if (c == null) return !1;
                            var a = b();
                            if (a == null) return !1;
                            return c >= a
                        }
                }
                if (this.R == d.D || this.R == d.Y) {
                    var h = this.R.charAt(0) == "N";
                    if (this.Y instanceof bj) {
                        var e = this.py(this.Y.cW);
                        if (this.bn instanceof bj) {
                            var a = e.test(this.bn.cW);
                            return function () {
                                return h ? !a : a
                            }
                        }
                        return function () {
                            var a = g();
                            if (a == null) return !1;
                            var b = e.test(a);
                            return h ? !b : b
                        }
                    }
                    var c = this;
                    return function () {
                        var d = g();
                        if (d == null) return !1;
                        var a = b();
                        if (a == null) return !1;
                        var e = c.lM(d, a, 0, 0);
                        return h ? !e : e
                    }
                }
                return this._super()
            },
            px: by(["^", "$", d.bM, ".", "+", "*", "?", "[", "]", "(", ")", "{", "}"]),
            py: function (b) {
                var c = ["^"];
                for (var e = 0; e < b.length; ++e) {
                    var a = b.charAt(e);
                    a == "%" ? c.push(d.fm) : a == "?" ? c.push(".") : (this.px[a] && c.push(d.bM), c.push(a))
                }
                c.push("$");
                return new RegExp(c.join(""))
            },
            lM: function (a, c, e, f) {
                while (e < a.length && f < c.length) {
                    var d = a.charAt(e),
                        b = c.charAt(f);
                    if (b == "?" || b != "%" && d == b)++e, ++f;
                    else {
                        if (b != "%") return !1;
                        ++f;
                        if (f >= c.length) return !0;
                        b = c.charAt(f);
                        while (b == "?" || b == "%") {
                            if (b == "?") if (e < a.length)++e;
                            else return !1;
                            ++f;
                            if (f >= c.length) return !0;
                            b = c.charAt(f)
                        }
                        do {
                            while (e < a.length && b != a.charAt(e))++e;
                            if (e < a.length && this.lM(a, c, e + 1, f + 1)) return !0;++e
                        } while (e < a.length)
                    }
                }
                while (f < c.length && c.charAt(f) == "%")++f;
                return e == a.length && f == c.length
            },
            N: function (a) {
                if (!(a instanceof f)) return !1;
                if (this.R != a.R) return !1;
                if (!this.bn.N(a.bn)) return !1;
                if (!this.Y.N(a.Y)) return !1;
                return !0
            }
        }),
        w = e.extend({
            init: function (a) {
                this._super(), this.t = a
            },
            cj: function () {
                return [this.t]
            },
            X: function (b) {
                var a = b.dk(this);
                if (a != null) return a;
                var c = this.t.X(b);
                return function () {
                    return !c()
                }
            },
            N: function (a) {
                if (!(a instanceof w)) return !1;
                if (!this.t.N(a.t)) return !1;
                return !0
            }
        }),
        bB = e.extend({
            init: function (a, b) {
                this._super(), this.bz = a, this.t = b
            },
            cj: function () {
                return [this.t]
            },
            X: function (b) {
                var a = b.dk(this);
                if (a != null) return a;
                var c = this.t.X(b);
                return this.bz ?
                    function () {
                        return c() == null
                    } : function () {
                    return c() != null
                }
            },
            N: function (a) {
                if (!(a instanceof bB)) return !1;
                if (this.bz != a.bz) return !1;
                if (!this.t.N(a.t)) return !1;
                return !0
            }
        }),
        Q = e.extend({
            init: function (b, a, c) {
                this._super(), this.bn = b, this.bz = a, this.Y = c
            },
            cj: function () {
                return [this.bn, this.Y]
            },
            pz: function (b, c) {
                if (b.length != c.length) return !1;
                for (var a = 0; a < b.length; ++a) if (b[a] != c[a]) return !1;
                return !0
            },
            X: function (c) {
                var d = this.bn.X(c),
                    b = this.Y.X(c),
                    e = [0],
                    a = this.pz,
                    f = function () {
                        var f = d();
                        if (f == null) return !1;
                        var c = b();
                        if (c == null) return !1;
                        f instanceof Array || (e[0] = f, f = e);
                        if (!(c instanceof Array)) return f.length == 1 && f[0] == c;
                        if (c.length == 0) return !1;
                        if (c[0] instanceof Array) {
                            for (var g = 0; g < c.length; ++g) if (a(f, c[g])) return !0
                        } else {
                            if (f.length > 1) return a(f, c);
                            for (var g = 0; g < c.length; ++g) if (f[0] == c[g]) return !0
                        }
                        return !1
                    };
                return this.bz ?
                    function () {
                        return !f()
                    } : f
            },
            N: function (a) {
                if (!(a instanceof Q)) return !1;
                if (this.bz != a.bz) return !1;
                if (!this.bn.N(a.bn)) return !1;
                if (!this.Y.N(a.Y)) return !1;
                return !0
            }
        }),
        o = e.extend({
            init: function (b, a, c) {
                this._super(), this.t = this.bn = b, this.bz = a, this.Y = c, this.dQ = this.ed = null
            },
            nL: function (a) {
                this.dQ = this.Y, this.Y = a
            },
            fk: function () {
                this.ed = this.Y
            },
            jM: function () {
                return this.dQ == null
            },
            hK: function () {
                return this.dQ != null && this.ed == null
            },
            cj: function () {
                return [this.t, this.dQ, this.ed]
            },
            X: function (c) {
                var e = c.dk(this);
                if (e != null) return e;
                var d = this.t.X(c),
                    a = this.dQ.X(c),
                    b = this.ed.X(c);
                return this.bz ?
                    function () {
                        var e = d();
                        if (e == null) return !1;
                        var f = a();
                        if (f == null) return !1;
                        var c = b();
                        if (c == null) return !1;
                        return e < f || e > c
                    } : function () {
                    var e = d();
                    if (e == null) return !1;
                    var f = a();
                    if (f == null) return !1;
                    var c = b();
                    if (c == null) return !1;
                    return e >= a() && e <= b()
                }
            },
            N: function (a) {
                if (!(a instanceof o)) return !1;
                if (this.bz != a.bz) return !1;
                if (!this.t.N(a.t)) return !1;
                if (!this.dQ.N(a.dQ)) return !1;
                if (!this.ed.N(a.ed)) return !1;
                return !0
            }
        }),
        R = e.extend({
            init: function (b, a) {
                this._super(), this.t = b, this.bz = a
            },
            cj: function () {
                return [this.t]
            },
            X: function (b) {
                var a = b.dk(this);
                if (a != null) return a;
                var c = this.t.X(b);
                return this.bz ?
                    function () {
                        return c() != null
                    } : function () {
                    return c() == null
                }
            },
            N: function (a) {
                if (!(a instanceof R)) return !1;
                if (this.bz != a.bz) return !1;
                if (!this.t.N(a.t)) return !1;
                return !0
            }
        }),
        bM = bn.extend({
            init: function (
                a, b) {
                this._super(), this.fS = null, this.D = a, this.O = b
            },
            cj: function () {
                return []
            },
            X: function (c) {
                var a = c.dk(this);
                if (a != null) return a;
                var d = this.iT(c),
                    b = this.oc(c, d);
                return function () {
                    return d.bd(b)
                }
            },
            iT: function (c) {
                var e = null,
                    b = this.D || this.fS;
                if (b != null) e = c.hg(b), e == null && (c.gg() ? c.cU.bH(d.bT + this.O + d.cg, this._) : c.cU.bH(d.cX + this.D, this._));
                else {
                    var a = c.nY(this.O);
                    a.length == 0 && (c.gg() ? c.cU.bH(d.bT + this.O + d.cg, this._) : c.cU.bH(d.c_ + this.O + d.fZ, this._)), a.length > 1 && c.cU.bH(d.fe + this.O + d.fY, this._), e = a[0]
                }
                return e
            },
            oc: function (b, a) {
                var c = a.ci(this.O);
                (typeof c == d.e || c == -1) && b.cU.bH(d.cZ + this.O, this._);
                return c
            },
            N: function (a) {
                if (!(a instanceof bM)) return !1;
                if ((this.D || this.fS) != (a.D || a.fS)) return !1;
                if (this.O != a.O) return !1;
                return !0
            }
        }),
        s = Class.extend({
            init: function (b, a) {
                this.dg = b, this.bJ = a, this.u = 0
            },
            bR: function () {
                this.u < this.bJ.length && ++this.u
            },
            kg: function () {
                this.u > 0 && --this.u
            },
            be: function (a) {
                return this.u < this.bJ.length ? this.bJ[this.u] : a || null
            },
            I: function (a) {
                this.bR();
                if (this.u >= this.bJ.length) {
                    if (a) return a;
                    throw new ba(d.dQ, this)
                }
                return this.be()
            },
            qh: function () {
                return this.u > 0 ? this.bJ[this.u - 1] : null
            },
            is: function () {
                return this.u + 1 < this.bJ.length ? this.bJ[this.u + 1] : null
            },
            fw: function () {
                return this.u >= this.bJ.length
            },
            qr: function () {
                return this.u + 1 == this.bJ.length
            },
            jS: [],
            gH: function () {
                this.jS.push(this.u)
            },
            fK: function () {
                return this.jS.pop()
            },
            he: function () {
                this.u = this.fK()
            }
        }),
        ba = Exception.extend({
            init: function (a, b, c) {
                this._super(a), b instanceof s ? (this.lL = b.dg, this.gx = c != null ? c : b.u) : (this.lL = b, this.gx = c != null ? c : -1)
            },
            oa: function (c) {
                var h = {
                    bL: this.lL
                };
                c && (h.bL = h.bL.replace(/\s+/gm, " "));
                var d = new g(h.bL),
                    a = d.kV(),
                    e = this.gx;
                if (a.length == 0 || e < 0 || e >= a.length) h.cA = -1;
                else {
                    h.cA = 0;
                    var f = 0;
                    while (f <= e && h.cA < h.bL.length) {
                        var b = h.bL.substr(h.cA, a[f].length);
                        b == a[f] ? h.cA += a[f++].length : ++h.cA
                    }
                    h.cA -= a[e].length, h.cA >= h.bL.length && (h.cA = -1)
                }
                return h
            },
            ob: function () {
                var e = this.oa(!0),
                    a = 30,
                    c = "";
                if (e.cA == -1) c = (e.bL.length > a * 2 ? e.bL.substr(0, a * 2) + d.bl : e.bL) + d.J, c += d.cI;
                else {
                    e.cA > a && (e.bL = d.bl + e.bL.substr(e.cA - a), e.cA = a + 3), e.cA + a < e.bL.length && (e.bL = e.bL.substr(0, e.cA + a) + d.bl), c = e.bL + d.J;
                    for (var b = 0; b < e.cA; ++b) c += " ";
                    c += d.cJ
                }
                return c
            },
            getVerboseErrorMessage: function () {
                return [d.d$, this.gx == -1 ? "" : d.fS + this.gx, d.fl, this.getMessage(), d.J, d.J, this.gx == -1 ? "" : this.ob()].join("")
            }
        }),
        g = Class.extend({
            init: function (a) {
                this.dg = a
            },
            mM: /'(''|\\'|[^'])*'|\d*\.\d+|[a-zA-Z]\w+|\d+|<=|>=|<>|<<|>>|!=|\|\||\S/g,
            ix: by(["*", "/", "%", "+", "-", d.bk, d.bg, "&", "^", "|", d.L, "=", d.bn, d.bi, "<", d.bj, ">", d.bh, d.D, d.Y, d.eM, d.eN, d.bc, d.Z, d.be, d.$, d.q, d.S, d.W, ","]),
            os: by([d.cR, d.em, d.cT, d.e$, d.eP, d.eo, d.dY, d.eq]),
            kV: function () {
                return this.dg.match(this.mM)
            },
            nQ: function () {
                var b = this.kV();
                for (var a = 0; a < b.length; ++a) b[a].length > 0 && b[a].charAt(0) != "'" && (b[a] = b[a].toUpperCase());
                return b
            },
            parse: function () {
                var e = this.nQ(),
                    c = null;
                if (e.length > 0) {
                    var b = new s(this.dg, e),
                        a = b.be();
                    if (a == d.m || a == d.bN) c = this.nf(b);
                    else throw new ba(d.cU + a, b);
                    c != null && (c.dg = this.dg)
                }
                return c
            },
            nf: function (c) {
                var a = new bQ,
                    b = c.be();
                c.u == 0 && b == d.bN && (a.eO = this.na(c), b = c.be()), a.bA = this.fW(c), !c.fw() && c.be() == d.j && (a.gR = this.ng(c));
                if (!c.fw()) throw new ba(d.eD + b, c);
                return a
            },
            na: function (f) {
                var c = d.eW,
                    h = new bg;
                do {
                    var i = f.I();
                    if (!this.ef(i)) throw new ba(c + d.ea + i, f);
                    var g = f.u,
                        a = [];
                    q = f.I();
                    if (q == "(") {
                        do {
                            var b = f.I();
                            if (!this.ef(b)) throw new ba(c + d.eb + b, f);
                            a.push(b), q = f.I()
                        } while (q.charAt(0) == ",");
                        if (q.charAt(0) != ")") throw new ba(c + d.ej, f);
                        q = f.I()
                    }
                    if (q != d.I) throw new ba(c + d.eh, f);
                    q = f.I();
                    if (q != d.T) {
                        if (q != "(") throw new ba(c + d.ei, f);
                        f.I()
                    }
                    var e = this.fW(f);
                    h.iC.push(i), h[i] = new bw(i, a, e), h[i]._ = g, q = f.I()
                } while (q == ",");
                if (q != d.m) throw new ba(c + d.dg, f);
                return h
            },
            od: by([")", d.j]),
            mP: by([d.z, d.H, d.E]),
            fW: function (e) {
                var c = this.ko(e),
                    a = new bq(c);
                a._ = c._;
                while (!e.fw()) {
                    var b = e.be();
                    if (this.bZ(b, this.od)) break;
                    var f = new cp;
                    f.fO = this.mP[b];
                    if (f.fO == null) throw new ba(d.et, e);
                    b = e.I(), b == d.bf && (f.fO += 3, b = e.I()), f.bp = this.ko(e), a.cS || (a.cS = []), a.cS.push(f)
                }
                return a
            },
            ko: function (c) {
                var b = c.be();
                if (b == d.T) return this.nc(c);
                if (b != d.m) throw new ba(d.dm, c);
                var a = new bk;
                a._ = c.u, b = c.I(), b == d.bW ? (a.dT = !0, b = c.I()) : b == d.bf ? (a.dT = !1, b = c.I()) : a.dT = !1, a.eb = this.ne(c), b = c.be(), b == d.l && (a.hk = this.nk(c), b = c.be(), b == d.x && (a.dI = this.nb(c), b = c.be()), b == d.F && (a.fg = this.nj(c), b = c.be(), b == d.bU && (a.hb = this.ni(c), b = c.be())));
                return a
            },
            nc: function (e) {
                var b = e.I();
                if (b != "(") throw new ba(d.dw, e);
                var a = null,
                    g = e.I();
                if (g == ")") a = this.jm([]);
                else {
                    if (g != "(") {
                        e.gH();
                        var f = this.cH(e);
                        if (f instanceof be) a = f;
                        else if (f instanceof cf) a = this.jm([f]);
                        else {
                            e.he();
                            throw new qt(d.er, e)
                        }
                        e.fK()
                    } else {
                        var h = [];
                        for (;;) {
                            if (b != "(") throw new ba(d.dv, e);
                            e.bR(), h.push(this.cH(e));
                            if (e.be() != ")") throw new ba(d.ds, e);
                            b = e.I();
                            if (b != ",") break;
                            b = e.I()
                        }
                        a = this.jm(h)
                    }
                    if (e.be() != ")") throw new ba(d.du, e)
                }
                var c = new bk;
                c.eP = a;
                return c
            },
            jm: function (b) {
                var a = new be;
                a.fk(), a.V = b;
                return a
            },
            ne: function (c) {
                var b = this.nn(c),
                    a = new bl(b);
                return a
            },
            nk: function (c) {
                var a = [],
                    b = c.be();
                if (b != d.l) throw new ba(d.dr, c);
                do c.bR(), a.push(this.iu(c)), b = c.be("x");
                while (b == ",");
                return new L(a)
            },
            nb: function (c) {
                var b = c.be();
                if (b != d.x) throw new ba(d.dl, c);
                b = c.I();
                var a = this.cH(c);
                return new cn(a)
            },
            nj: function (c) {
                var b = c.be();
                if (b != d.F) throw new ba(d.dq, c);
                b = c.I();
                if (b != d.b$) throw new ba(d.di, c);
                b = c.I();
                var a = this.cH(c);
                return new K(a)
            },
            ni: function (c) {
                var b = c.be();
                if (b != d.bU) throw new ba(d.dp, c);
                b = c.I();
                var a = this.cH(c);
                return new F(a)
            },
            nq: by([",", d.b_, d.bX]),
            ng: function (c) {
                var b = c.be();
                if (b != d.j) throw new ba(d.dn, c);
                b = c.I();
                if (b != d.b$) throw new ba(d.dh, c);
                b = c.I();
                var e = [];
                for (;;) {
                    var f = this.cH(c);
                    if (f instanceof be) {
                        var g = f.V;
                        f = g.pop();
                        for (var a = 0; a < g.length; ++a) e.push(new bo(g[a], !0))
                    }
                    var b = c.be(d.b_);
                    if (!this.bZ(b, this.nq)) throw new ba(d.ez + b + d.fB, c);
                    e.push(new bo(f, b != d.bX)), b != "," && (b = c.I(","));
                    if (b != ",") throw new ba(d.eA, c);
                    if (c.fw()) break;
                    c.bR()
                }
                return new u(e)
            },
            nC: by([d.ba, d.B, d.G]),
            nB: by([")", d.x, d.F, d.j, d.X, d.y, ",", d.z, d.H, d.E]),
            iu: function (e) {
                var g = this.nd(e),
                    b = null,
                    f = null;
                for (;;) {
                    var c = e.be();
                    if (c == d.p) {
                        c = e.I();
                        if (c != d.o) throw new ba(d._, e);
                        b = d.p
                    } else if (c == d.V) {
                        c = e.I();
                        if (c != d.o) throw new ba(d._, e);
                        b = d.ba
                    } else if (this.bZ(c, this.nC)) {
                        b = c, c = e.I(), c == d.V && (c = e.I());
                        if (c != d.o) throw new ba(d._, e)
                    } else if (c == d.o) b = d.p;
                    else {
                        if (e.fw() || this.bZ(c, this.nB)) break;
                        throw new ba(d.eJ + c, e)
                    }
                    e.bR(), f = this.iu(e), c = e.be();
                    if (c == d.X) {
                        e.bR();
                        var h = this.cH(e);
                        g = new C(g, b, f, !0, h)
                    } else {
                        if (c != d.y) throw new ba(d.ek, e);
                        var a = e.u;
                        e.bR();
                        var i = this.nh(e, d.y);
                        if (i.length == 0) throw new ba(d.dJ, e);
                        g = new C(g, b, f, !1, i), g.hL = a
                    }
                }
                return g
            },
            mF: by([")", d.X, d.x, d.p, d.o, d.ba, d.B, d.G, d.V, ",", d.F, d.j, d.z, d.H, d.E, d.y]),
            nd: function (c) {
                var a = c.be(),
                    e = null,
                    b = !1;
                if (a == "(") {
                    a = c.I(), a == d.m ? e = new n(this.fW(c), null) : (e = this.iu(c), b = !0), a = c.be();
                    if (a != ")") throw new ba(d.dj, c)
                } else if (a == d.T) e = new n(this.fW(c), null);
                else if (this.ef(a)) e = new n(a, null);
                else throw new ba(d.cW + a, c);
                a = c.I(")");
                if (!b) {
                    var f = a == d.I;
                    f && (a = c.I(")"));
                    if (this.bZ(a, this.mF)) f && (e.S = d.I);
                    else if (this.ef(a)) e.S = a, c.bR();
                    else throw new ba(d.eu + a, c)
                }
                return e
            },
            nh: function (e, b) {
                var f = [],
                    c = e.be(),
                    a = c == "(";
                a && (c = e.I());
                for (;;) {
                    if (!this.ef(c)) throw new ba(d.ew + b + d.cd + c, e);
                    f.push(c);
                    if (a) {
                        c = e.I();
                        if (c == ")") {
                            e.bR();
                            break
                        }
                        if (c != ",") throw new ba(d.ev + b + d.cd + c, e)
                    } else if (e.I(")") != ",") break;
                    c = e.I()
                }
                return f
            },
            hq: by([d.l, d.z, d.H, d.E, d.j, ")"]),
            nn: function (c) {
                var h = [],
                    b = c.be(d.l);
                if (this.bZ(b, this.hq)) throw new ba(d.ec, c);
                do {
                    var e = this.cH(c);
                    if (e instanceof be) {
                        var g = e.V;
                        e = g.pop();
                        for (var a = 0; a < g.length; ++a) h.push(new E(g[a], null))
                    }
                    b = c.be(d.l);
                    if (b == "," || this.bZ(b, this.hq)) h.push(new E(e, null));
                    else {
                        var f = b == d.I ? c.I() : b;
                        if (!this.ef(f)) throw new ba(d.ex, c);
                        h.push(new E(e, f)), b = c.I(d.l);
                        if (b != "," && !this.bZ(b, this.hq)) throw new ba(d.es, c)
                    }
                    b == "," && c.bR()
                } while (!this.bZ(b, this.hq));
                return h
            },
            no: function (c) {
                var e = null,
                    a = [],
                    b = [],
                    f = null,
                    g = c.I();
                g != d.bO && (e = this.cH(c), g = c.be());
                for (;;) {
                    if (g == d.bO) {
                        c.bR(), a.push(this.cH(c)), g = c.be();
                        if (g != d.dL) throw new ba(d.eH, c);
                        c.bR(), b.push(this.cH(c))
                    } else if (g == d.eY) c.bR(), f = this.cH(c);
                    else {
                        if (g == d.eX) {
                            c.bR();
                            break
                        }
                        throw new ba(d.eG, c)
                    }
                    g = c.be()
                }
                return new O(e, a, b, f)
            },
            pa: by([d.bc, d.D, d.be]),
            cH: function (h) {
                h.fw() && h.I();
                var c = [],
                    j = [],
                    a = [];
                for (;;) {
                    var i = this.nl(h);
                    c.push(i);
                    var k = h.be(")"),
                        g = h.u;
                    this.bZ(k, this.os) && (i = new ch(d.cH + k, [c.pop()]), i._ = h.u, c.push(i), k = h.I(")"));
                    if (k == d.eL) {
                        h.gH(), k = h.I();
                        var f = k == d.C;
                        f && (k = h.I());
                        if (k != d.ee) {
                            h.he();
                            throw new ba(d.eI, h)
                        }
                        h.fK(), i = new R(c.pop(), f), i._ = g, c.push(i), k = h.I(")")
                    }
                    if (k == d.C) {
                        var e = h.is();
                        this.bZ(e, this.pa) && (h.bR(), k = d.ef + e)
                    }
                    if (!this.bZ(k, this.ix)) break;
                    j.push(k), a.push(g), h.bR()
                }
                if (j.length == 0) return c[0];
                if (j.length == 1) {
                    var b = this.hn(c[0], j[0], c[1], a[0]);
                    b instanceof be && b.fk();
                    return b
                }
                return this.pm(c, j, a)
            },
            mz: by(["+", "-", "~", d.C, d.bd]),
            nl: function (j) {
                var l = null,
                    n = j.be(),
                    g = null;
                if (this.bZ(n, this.mz)) {
                    var k = n,
                        i = j.u;
                    n = j.I();
                    if (k == d.C) if (n == d.bd) {
                        n = j.I();
                        if (n != "(") throw new ba(d.dD, j);
                        g = new bB(!0, null)
                    } else {
                        if (n != "(") throw new ba(d.dE, j);
                        g = new w(null)
                    } else if (k == d.bd) {
                        if (n != "(") throw new ba(d.dF, j);
                        g = new bB(!1, null)
                    } else g = new co(k, null);
                    g._ = i
                }
                if (n == "(") {
                    j.gH(), j.bR(), l = this.cH(j);
                    if (l == null) {
                        j.he();
                        throw new ba(d.dd, j)
                    }
                    j.fK();
                    if (j.be() != ")") throw new ba(d.dc, j)
                } else if (n.charAt(0) == "'") l = new bj(n.substr(1, n.length - 2).replace(/''/, "'")), l._ = j.u;
                else if (n.charAt(0) >= "0" && n.charAt(0) <= "9") {
                    if (n.indexOf(".") >= 0) {
                        var c = parseFloat(n);
                        if (isNaN(c)) throw new ba(d.bP + n + "'", j);
                        l = new Y(c)
                    } else {
                        var c = parseInt(n);
                        if (isNaN(c)) throw new ba(d.bP + n + "'", j);
                        l = new bp(c)
                    }
                    l._ = j.u
                } else if (n == d.m) {
                    var o = this.fW(j);
                    l = new H(o), l._ = j.u, j.kg()
                } else if (n == d.fd) l = this.no(j), j.kg();
                else if (n == "*") l = new bM(null, "*"), l._ = j.u;
                else {
                    if (!this.ef(n)) throw new ba(d.dz, j);
                    var i = j.u,
                        e = j.is();
                    if (n == d.eQ && e == d.dR) {
                        n = d.bV, j.bR(), e = j.is();
                        if (e != "(") throw new ba(d.fy, j)
                    }
                    if (e == ".") {
                        j.gH();
                        var a = n;
                        j.I(), n = j.I();
                        if (this.ef(n.charAt(0))) l = new bM(a, n);
                        else if (n == "*") l = new bM(a, "*");
                        else {
                            j.he();
                            throw new ba(d.dx + a + d.fX + n, j)
                        }
                        j.fK(), l._ = i
                    } else if (e == "(") {
                        var m = n;
                        j.bR(), n = j.I();
                        var b = null,
                            h = !1;
                        if (this.bZ(m, Z.catalog.functions.eJ)) {
                            b = n != d.bW, h = m == d.fc && n == "*";
                            if (b == !1 || h == !0 || n == d.bf) n = j.I()
                        }
                        var f = null;
                        if (n != ")") {
                            if (h) throw new ba(d.eS, j);
                            f = this.cH(j), n = j.be();
                            if (n != ")") throw new ba(d.dy + m + d.fA, j)
                        }
                        f == null && h && (f = new bp(1)), l = new ch(m, f == null ? null : f instanceof be ? f.V : [f]), l._ = i, b != null && (l.dT = !b), h && (l.qi = h)
                    } else n == d.fa && this.bZ(e, this.or) ? (j.I(), l = new ch(n + "_" + e, null), l._ = i) : (l = new bM(null, n), l._ = i)
                }!g || (g.t = l, l = g), j.bR();
                return l
            },
            or: by([d.e_, d.dK]),
            pm: function (c, l, a) {
                var f = this.hn(c[0], l[0], c[1], a[0]),
                    m = [f],
                    j = [this.ix[l[0]]],
                    g = 0;
                for (var n = 1; n < l.length; ++n) {
                    var k = this.ix[l[n]],
                        i = l[n] == d.q,
                        b;
                    while (g >= 0 && j[g] <= k) {
                        var h = m.pop(),
                            e = j.pop();
                        --g;
                        if (h instanceof o) {
                            if (i && h.jM()) {
                                k = e;
                                break
                            }
                            h.hK() && h.fk()
                        }
                    }
                    g == -1 ? l[n] == "," && f instanceof be ? (f.lF(c[n + 1]), b = f) : f = b = this.hn(f, l[n], c[n + 1], a[n]) : m[g].Y = b = this.hn(m[g].Y, l[n], c[n + 1], a[n]), m.push(b), j.push(k), ++g
                }
                while (m.length > 0) {
                    var p = m.pop();
                    p instanceof o && p.hK() && h.fk()
                }
                f instanceof be && f.fk();
                return f
            },
            pn: by(["*", "/", "%", "+", "-", d.bk, d.bg, "&", "^", "|", d.L]),
            mN: by(["=", d.bn, d.bi, "<", d.bj, ">", d.bh, d.D, d.Y]),
            nw: by([d.q, d.S, d.W]),
            hn: function (g, b, c, a) {
                var e = null;
                if (this.bZ(b, this.pn)) e = new P(g, b, c);
                else if (this.bZ(b, this.mN)) e = new f(g, b, c);
                else if (b == d.bc || b == d.Z) e = new Q(g, b == d.Z, c);
                else if (b == d.be || b == d.$) e = new o(g, b == d.$, c);
                else if (b == d.q && g instanceof o && g.jM()) g.nL(c), e = g;
                else if (b == ",") e = new be(g, c);
                else if (this.bZ(b, this.nw)) e = new I(g, b, c);
                else throw new ba(d.cV + b, this.dg, a);
                e._ = a;
                return e
            },
            ef: function (a) {
                return a.length > 0 && a.charAt(0) >= "A" && a.charAt(0) <= "Z"
            },
            bZ: function (b, a) {
                return a[b] != null
            }
        }),
        S = Class.extend({
            init: function (b, a) {
                this.cU = b, this.cZ = {}, this.hB = [this.cZ], this.dH = 0, this.lK = 0, this.cv = a, this.dZ = a ? a.dZ : {}
            },
            fu: function () {
                var b = new S(this.cU, this.cv);
                b.dZ = {};
                for (var a in this.dZ) b.dZ[a] = this.dZ[a];
                return b
            },
            fN: function () {
                ++this.dH;
                while (this.dH + 1 > this.hB.length) this.hB.push({});
                this.cZ = this.hB[this.dH]
            },
            hM: function () {
                this.dH > 0 && --this.dH, this.cZ = this.hB[this.dH]
            },
            qq: function () {
                return this.dH > 0
            },
            ps: function (b, a) {
                this.dZ[b] = a
            },
            gg: function () {
                return this.dH == 1
            },
            kZ: function () {
                if (this.dH == 1) for (m in this.cZ) if (this.cZ[m] instanceof V) return this.cZ[m];
                return null
            },
            k$: function () {
                if (this.gg()) return this;
                return this.cv == null ? null : this.cv.k$()
            },
            jr: function (b, a) {
                ++this.lK, a == null && (a = d.cG + this.lK), this.cZ[a] = b
            },
            ld: function (b) {
                for (var a in this.cZ) if (this.cZ[a] == b) return a;
                return this.cv == null ? null : this.cv.ld(b)
            },
            hg: function (b) {
                var a = this.cZ[b];
                if (a != null) return a;
                return this.cv == null ? null : this.cv.hg(b)
            },
            nY: function (a) {
                return this.lD(a, [])
            },
            lD: function (c, b) {
                for (var a in this.cZ) this.cZ[a].ci(c) > -1 && b.push(this.cZ[a]);
                return this.cv == null ? b : this.cv.lD(c, b)
            },
            dk: function (a) {
                if (this.dH == 1) {
                    var b = this.kZ(),
                        c = b.nX(a);
                    if (c != null) return c.bd
                }
                return this.cv == null ? null : this.cv.dk(a)
            }
        }),
        bC = Class.extend({
            init: function () {}
        }),
        bD = Class.extend({
            init: function (a) {
                this.dc = a
            },
            oC: function () {
                var a = null;
                this.dc instanceof bQ && (a = this.oB(this.dc));
                return a
            },
            oB: function (e) {
                var f = new bC,
                    c = new S(this, null),
                    h = e.eO;
                if (h != null) for (var b = 0; b < h.iC.length; ++b) {
                    var j = h.iC[b],
                        i = h[j];
                    c.dZ[j] != null && this.bH(d.fi + j + d.fG, i._);
                    var a = new bf(i, c);
                    a.nI(), c.ps(j, a)
                }
                f.gF = this.ho(e.bA, c, !1);
                if (e.gR != null) {
                    for (var g = 0; g < e.gR.V.length; ++g) this.mW(e.gR.V[g], g, f.gF, c);
                    f.gF = new bO(f.gF, e.gR.V)
                }
                return f
            },
            ho: function (i, f, h) {
                var b = i.cS != null,
                    k = h || b ? new S(this, f) : f,
                    g = this.lq(i.bp, k);
                if (b) {
                    var c = g.bC();
                    for (var a = 0; a < i.cS.length; ++a) {
                        var j = i.cS[a];
                        k = new S(this, f);
                        var e = this.lq(j.bp, k);
                        e.bC() != c && this.bH(d.eV, i._);
                        switch (j.fO) {
                            case 0:
                                g = new bP(g, e);
                                break;
                            case 1:
                                g = new bS(g, e);
                                break;
                            case 2:
                                g = new bU(g, e);
                                break;
                            case 3:
                                g = new bR(g, e);
                                break;
                            case 4:
                                g = new bT(g, e);
                                break;
                            case 5:
                                g = new bV(g, e)
                        }
                    }
                }
                b && !h && (f.fN(), f.jr(g, d.cw));
                return g
            },
            lq: function (a, b) {
                var c = null;
                if (a.eP != null) return this.ou(a.eP, b);
                a.hk == null ? c = new bH : c = this.oE(a, b), c = this.oA(a, c, b);
                return c
            },
            ou: function (h, f) {
                var c = 1,
                    b = [];
                if (h.V.length > 0) {
                    c = this.lb(h);
                    for (var k = 0; k < h.V.length; ++k) {
                        var e = h.V[k],
                            g = [];
                        if (e instanceof be) {
                            e.V.length != c && this.bH(d.bb, e._);
                            for (var a = 0; a < c; ++a) g.push(e.V[a].X(f))
                        } else if (e instanceof H) {
                            var i = this.lc(e.bA);
                            i != c && this.bH(d.bb, e._), g = e.X(f)
                        } else e instanceof bn ? c == 1 ? g.push(e.X(f)) : this.bH(d.bb, e._) : this.bH(d.eB, e._);
                        b.push(g)
                    }
                }
                var j = new bh(b, c);
                return j
            },
            lb: function (a) {
                var b = a.V[0];
                b instanceof bn || this.bH(d.eC, b._ || a._);
                return b instanceof be ? b.V.length : b instanceof H ? this.lc(b.bA) : 1
            },
            lc: function (a) {
                return a.bp.eP != null ? this.lb(a.bp.eP.ba) : a.bp.eb.dX.length
            },
            oE: function (c, d) {
                var a = this.oG(c, d);
                if (c.hb) {
                    var b = this.jl(c.hb.dw, d);
                    a = new k(a), a.hw(b)
                }
                return a
            },
            oG: function (b, d) {
                var c = this.ot(b, d),
                    a = null;
                if (b.fg != null || this.iQ(b.
                    eb)) a = new V(c), b.fg != null ? (this.gE(b.fg.ba, d), a.nJ(b.fg, d)) : a.nK(d), d.fN(), d.jr(a);
                return a || c
            },
            gE: function (c, d) {
                if (c instanceof bM) {
                    if ((c.D || c.fS) == null) {
                        var e = c.iT(d);
                        c.fS = d.ld(e) || e.bo.D
                    }
                } else {
                    var b = c.cj();
                    if (b != null) for (var a = 0; a < b.length; ++a) this.gE(b[a], d)
                }
            },
            iQ: function (a) {
                if (a instanceof bn) {
                    if (a instanceof ch && a.le == 2) return !0;
                    var b = a.cj();
                    if (b != null) for (var c = 0; c < b.length; ++c) if (this.iQ(b[c])) return !0
                } else if (a instanceof bl) for (var c = 0; c < a.dX.length; ++c) if (this.iQ(a.dX[c].t)) return !0;
                return !1
            },
            ot: function (c, d) {
                var a = this.oy(c.hk.hQ, d);
                if (c.dI) {
                    var b = this.jl(c.dI.dw, d);
                    a = new k(a), a.hw(b)
                }
                return a
            },
            oA: function (a, l, c) {
                var b = 0,
                    i = [];
                for (var g = 0; g < a.eb.dX.length; ++g) {
                    var k = a.eb.dX[g],
                        e = k.t instanceof bM;
                    if (e && k.t.O == "*") i = i.concat(this.oz(k, l, c));
                    else {
                        var h = k.S || k.t.O || d.cx + ++b,
                            f = this.ls(k.t, h, c);
                        i.push(f)
                    }
                }
                return a.dT ? new bJ(l, i) : new j(l, i)
            },
            oy: function (c, d) {
                var a = null;
                for (var b = 0; b < c.length; ++b) {
                    var e = this.jk(c[b], d);
                    a == null ? a = e : a = new $(a, e, 0)
                }
                return a
            },
            jk: function (b, a) {
                if (b instanceof n) return this.ow(
                    b, a);
                if (b instanceof C) return this.oD(b, a);
                throw new Exception(d.cy)
            },
            oD: function (h, f) {
                var k = this.jk(h.ga, f),
                    c = this.jk(h.fR, f),
                    e = h.cX;
                bc = new $(k, c, e);
                if (h.eN) {
                    var i = this.jl(h.iy, f);
                    bc.hw(i)
                } else {
                    var b = [],
                        a = [];
                    for (var j = 0; j < h.gD.length; ++j) {
                        var g = h.gD[j],
                            l = k.ci(g),
                            m = c.ci(g);
                        (l == null || m == null) && this.bH(d.dk + g + d.fH, h.hL + (j + 1) * 2), b.push(l), a.push(m)
                    }
                    bc.hw(new bi(k, c, b, a))
                }
                return bc
            },
            ow: function (a, c) {
                var b = null;
                if (a.bA != null) b = this.ho(a.bA, c, !0);
                else {
                    var e = c.dZ[a.D];
                    e != null ? b = e.hg() : (b = this.n_(a.D), b == null && this.bH(d.cY + a.D + "'", a._))
                }
                c.jr(b, a.S || a.D);
                return b
            },
            n_: function (a) {
                var b = Z.catalog.ea[a];
                if (b != null) return new bK(Z.catalog.bs[b]);
                var e = Z.nR();
                for (var d = 0; d < e.length; ++d) {
                    var c = e[d].getIterableTable(a);
                    if (c != null) return new bL(c)
                }
                return null
            },
            mW: function (e, b, a, f) {
                var g = e.t;
                if (g instanceof bp) {
                    var c = Number(g.cW) - 1;
                    c >= a.bC() ? this.bH(d.bY + g.cW + d.fp + a.bC() + d.fQ, g._) : c < 0 && this.bH(d.bY + g.cW + d.fo + a.bC() + ".", g._), e.eH = new bE(d.Q + c, a, c)
                } else {
                    if (g instanceof bM && g.D == null) {
                        var h = a.ci(g.O);
                        if (h != null && h >= 0) {
                            e.eH = new bE(
                                d.Q + h, a, h);
                            return
                        }
                    }
                    a instanceof bW && this.bH(d.ey, g._), e.eH = this.ls(g, d.Q + b, f)
                }
            },
            jl: function (a, b) {
                a instanceof e || this.bH(d.eE, a._), b.gg() && (b.hM(), this.gE(a, b), b.fN());
                return new T(a.X(b))
            },
            ls: function (a, c, b) {
                a instanceof bn || this.bH(d.eF, a._), b.gg() && (b.hM(), this.gE(a, b), b.fN());
                return new U(c, a.X(b))
            },
            oz: function (c, a, e) {
                var f = a;
                c.t.D != null && (f = c.t.iT(e));
                var g = [],
                    h = f.bC();
                for (var d = 0; d < h; ++d) {
                    var b = c.S;
                    b == null ? b = f.ch(d) : h > 0 && (b = [b, d + 1].join("")), g.push(new bE(b, f, d))
                }
                return g
            },
            bH: function (a, b) {
                throw new ba(a, this.dc.dg, b)
            }
        }),
        bf = Class.extend({
            init: function (b, a) {
                this.nu = b, this.e_ = a.fu(), this.y = null
            },
            lO: function () {
                var c = this.e_.cU,
                    a = this.nu,
                    b = c.ho(a.bA, this.e_.fu(), !0);
                a.columnNames != null && a.columnNames.length > 0 && (a.columnNames.length != b.bC() && c.bH(d.dC, a._), b = new cd(b, a.columnNames));
                return b
            },
            nI: function () {
                this.y = this.lO()
            },
            hg: function () {
                var a = this.y || this.lO();
                this.y = null;
                return a
            }
        }),
        cc = Class.extend({
            init: function (a) {
                this.bc = a
            },
            getColumnCount: function () {
                return this.bc.bC()
            },
            getColumnName: function (a) {
                return this.bc.ch(a)
            },
            reset: function () {
                this.bc.Z()
            },
            next: function () {
                return this.bc.W()
            },
            getValue: function (a) {
                return this.bc.bd(a)
            }
        });
    Z.createCursor = function (a) {
        if (h(a) == "") throw new Exception(d.ed);
        var c = new g(a),
            f = c.parse(),
            e = new bD(f),
            b = e.oC().gF;
        b.Z();
        return new cc(b)
    }, Z.kl = function (j, h) {
        var c = (new Date).getTime(),
            a = Z.createCursor(j),
            i = (new Date).getTime(),
            d = {
                columnNames: [],
                data: []
            },
            b = a.getColumnCount();
        for (var e = 0; e < b; ++e) d.columnNames.push(a.getColumnName(e));
        while (a.next()) {
            var g = h ? [] : {};
            for (var e = 0; e < b; ++e) h ? g.push(a.getValue(e)) : g[d.columnNames[e]] = a.getValue(e);
            d.data.push(g)
        }
        var f = (new Date).getTime();
        d.planTime = i - c, d.fullTime = f - c;
        return d
    }, Z.queryCursor = function (a) {
        return Z.createCursor(a)
    }, Z.query = function (a) {
        return Z.kl(a, 1)
    }, Z.queryObjects = function (a) {
        return Z.kl(a, 0)
    }, Z.queryValue = function (b) {
        var a = Z.createCursor(b);
        return a.next() ? a.getValue(0) : null
    }, Z.queryRow = function (b) {
        var d = Z.createCursor(b),
            a = null;
        if (d.next()) {
            a = [];
            var e = d.getColumnCount();
            for (var c = 0; c < e; ++c) a.push(d.getValue(c))
        }
        return a
    }, Z.queryRowObject = function (b) {
        var d = Z.createCursor(b),
            a = null;
        if (d.next()) {
            a = {};
            var e = d.getColumnCount();
            for (var c = 0; c < e; ++c) a[d.getColumnName(c)] = d.getValue(c)
        }
        return a
    }, Z.insertRow = function (a, c) {
        var b = this.catalog.getTable(a);
        if (b) return b.insertRow(c);
        throw new Exception(d.A + a + d.bm)
    }, Z.updateRow = function (a, c) {
        var b = this.catalog.getTable(a);
        if (b) return b.updateRow(c);
        throw new Exception(d.A + a + d.bm)
    }, Z.deleteRow = function (a, c) {
        var b = this.catalog.getTable(a);
        if (b) return b.deleteRow(c);
        throw new Exception(d.A + a + d.bm)
    };
    var i = Class.extend({
            init: function () {}
        }),
        T = i.extend({
            init: function (a) {
                this._super(), this.test = a
            },
            test: function () {
                return !1
            }
        }),
        bi = T.extend({
            init: function (a, b, c, d) {
                this.iI = a, this.il = b, this.eC = c, this.eY = d
            },
            test: function () {
                for (var a = 0; a < this.eC.length; ++a) {
                    var c = this.iI.bd(this.eC[a]),
                        b = this.il.bd(this.eY[a]);
                    if (c != b) return !1
                }
                return !0
            }
        }),
        U = i.extend({
            init: function (b, a) {
                this._super(), this.S = b, this.bd = a
            },
            bd: function () {
                return null
            }
        }),
        bE = U.extend({
            init: function (b, c, a) {
                this.S = b, this.dm = c, this.G = a
            },
            bd: function () {
                return this.dm.bd(this.G)
            }
        }),
        bF = U.extend({
            init: function (e, c, a, b, f) {
                this.u = e, this.t = c, this.hd = a, this.O = b || d.u + this.u, this.eH = new U(this.O, c.X(f)), this._super(d.u + this.u, function () {
                    return a.bd(e)
                })
            }
        }),
        ca = Class.extend({
            init: function () {
                this.i$ = []
            },
            Z: function () {
                this.dx = -1
            },
            W: function () {
                return !1
            },
            bC: function () {
                return 0
            },
            ci: function (a) {
                return -1
            },
            bd: function (a) {
                return null
            },
            ch: function (a) {
                return null
            },
            hw: function (a) {
                this.i$.push(a)
            },
            er: function () {
                for (var a = 0; a < this.i$.length; ++a) if (!this.i$[a].test()) return !1;
                return !0
            }
        }),
        bH = ca.extend({
            init: function () {
                this._super(), this.hZ = !0
            },
            Z: function () {
                this.hZ = !0
            },
            W: function () {
                var a = this.hZ;
                this.hZ = !1;
                return a
            }
        }),
        bh = ca.extend({
            init: function (c, a) {
                this._super(), this.eo = c, this.bu = a, this.cN = {};
                for (var b = 0; b < a; ++b) this.cN[d.bZ + (b + 1)] = b;
                this.Z()
            },
            Z: function () {
                this.cB = this.jt = -1, this.fA = null
            },
            W: function () {
                if (this.fA != null) {
                    if (++this.jt < this.fA.length) return !0;
                    this.fA = null
                }
                var a = ++this.cB < this.eo.length;
                if (a && typeof this.eo[this.cB] == d.i) {
                    this.fA = this.nP(this.eo[this.cB]), this.jt = -1;
                    return this.W()
                }
                return a
            },
            nP: function (b) {
                var a = b();
                if (a == null) return [];
                if (!(a instanceof Array)) return [[a]];
                a.length > 0 && (a[0] instanceof Array || (a = [a]));
                return a
            },
            bC: function () {
                return this.bu
            },
            ci: function (a) {
                return this.cN[a]
            },
            bd: function (a) {
                var b = null;
                this.cB < this.eo.length && (this.fA != null ? b = this.fA[this.jt][a] : b = this.eo[this.cB][a]());
                return b
            },
            ch: function (a) {
                return d.bZ + (a + 1)
            }
        }),
        cd = ca.extend({
            init: function (a, b) {
                this._super(), this.y = a, this.bD = b, this.cN = {};
                for (var c = 0; c < this.bD.length; ++c) this.cN[b[c]] = c
            },
            Z: function () {
                this.y.Z()
            },
            W: function () {
                return this.y.W()
            },
            bC: function () {
                return this.bD.length
            },
            ci: function (a) {
                return this.cN[a]
            },
            bd: function (a) {
                return this.y.bd(a)
            },
            ch: function (a) {
                return this.bD[a]
            }
        }),
        j = ca.extend({
            init: function (a, b) {
                this._super(), this.y = a, this.cl = b, this.cN = {};
                for (var c = 0; c < this.cl.length; ++c) this.cN[b[c].S] = c;
                this.iP = !1
            },
            Z: function () {
                this.y.Z()
            },
            W: function () {
                while (this.y.W()) if (this.er()) {
                    this.iP = !0;
                    return !0
                }
                this.iP = !1;
                return !1
            },
            bC: function () {
                return this.cl.length
            },
            ci: function (a) {
                return this.cN[a]
            },
            bd: function (a) {
                return this.iP ? this.cl[a].bd() : null
            },
            ch: function (a) {
                return this.cl[a].S
            }
        }),
        bJ = j.extend({
            init: function (a, b) {
                this._super(a, b), this.hA = null, this.gy = null
            },
            Z: function () {
                this.y.Z(), this.hA = null
            },
            W: function () {
                this.hA == null && (this.oI(), this.cB = -1);
                return ++this.cB < this.gy.length
            },
            bd: function (a) {
                return this.cB < this.gy.length ? this.gy[this.cB][a] : null
            },
            oI: function () {
                this.hA = {}, this.gy = [];
                while (this.y.W()) if (this.er()) {
                    var a = [];
                    this.kI(this.hA, 0, a) && this.gy.push(a)
                }
            },
            kI: function (a, c, b) {
                var d = this.cl[c].bd();
                b.push(d);
                if (c < this.cl.length - 1) return this.kI(a[d] || (a[d] = {}), c + 1, b);
                return a[d] == null ? a[d] = 1 : !1
            }
        }),
        k = ca.extend({
            init: function (a) {
                this._super(), this.y = a
            },
            Z: function () {
                this.y.Z()
            },
            W: function () {
                while (this.y.W()) if (this.er()) return !0;
                return !1
            },
            bC: function () {
                return this.y.bC()
            },
            ci: function (a) {
                return this.y.ql(a)
            },
            bd: function (a) {
                return this.y.bd(a)
            },
            ch: function (a) {
                return this.y.ch(a)
            }
        }),
        V = ca.extend({
            init: function (a) {
                this._super(), this.y = a, this.qn = !0, this.cy = [], this.dE = [], this.fP = 0, this.ir = !1, this.fo = 0, this.gp = -1
            },
            bC: function () {
                return this.cy.length
            },
            ci: function (a) {
                return a.length <= 7 || a.substr(0, 7) != d.u ? -1 : Number(a.substr(7))
            },
            bd: function (a) {
                if (this.fo >= this.dE.length) return null;
                return this.dE[this.fo].fQ[this.gp][a]
            },
            ch: function (a) {
                return d.u + a
            },
            Z: function () {
                this.fo = 0, this.gp = -1, this.ir = !1;
                for (var a = 0; a < this.dE.length; ++a) this.dE[a].Z()
            },
            W: function () {
                this.ir || (this.m_(), this.ir = !0);
                if (this.fo < this.dE.length) {
                    ++this.gp;
                    if (this.gp >= this.dE[this.fo].fQ.length) {
                        this.gp = -1, ++this.fo;
                        return this.W()
                    }
                    return !0
                }
                return !1
            },
            m_: function () {
                this.y.Z();
                var c = Array(this.cy.length);
                while (this.y.W()) {
                    for (var a = 0; a < this.cy.length; ++a) c[a] = this.cy[a].eH.bd(a);
                    for (var b = 0; b < this.dE.length; ++b) this.dE[b].m$(c)
                }
            },
            nJ: function (a, c) {
                var d = a.ba instanceof be ? a.ba.V : [a.ba],
                    b = new X(this, c);
                this.dE = b.oF(d), this.fP = this.cy.length
            },
            nK: function (b) {
                var a = new X(this, b);
                this.dE = [a.oH()], this.fP = this.cy.length
            },
            nX: function (b) {
                for (var a = 0; a < this.fP; ++a) if (b.N(this.cy[a].t)) return this.cy[a];
                return null
            },
            lr: function (e, f, d, g) {
                var h = f ? 0 : this.fP,
                    b = f ? this.fP : this.cy.length;
                for (var a = h;
                     a < b; ++a) if (e.N(this.cy[a].t)) return this.cy[a];
                var c = new bF(this.cy.length, e, this, d, g);
                this.cy.push(c);
                return c
            }
        }),
        W = Class.extend({
            init: function (a, b) {
                this.dR = a, this.gG = b, this.Z()
            },
            Z: function () {
                this.fQ = [], this.T = {}
            },
            m$: function (c) {
                var b = this.nT(c);
                for (var a = this.gG; a < c.length; ++a) b[a].push(c[a])
            },
            nT: function (a) {
                if (this.dR.length == 0) {
                    this.fQ.length == 0 && this.kK(a);
                    return this.fQ[0]
                }
                return this.iU(this.T, 0, a)
            },
            iU: function (b, d, e) {
                var c = this.dR[d].u,
                    a = e[c],
                    f = b[a];
                f == null ? d == this.dR.length - 1 ? (f = this.kK(e), b[a] = f) : (f = {}, b[a] = f, f = this.iU(f, d + 1, e)) : d < this.dR.length - 1 && (f = this.iU(f, d + 1, e));
                return f
            },
            kK: function (c) {
                var a = Array(c.length);
                for (var d = 0; d < this.dR.length; ++d) a[this.dR[d].u] = c[this.dR[d].u];
                for (var b = this.gG; b < c.length; ++b) a[b] = [];
                this.fQ.push(a);
                return a
            }
        }),
        X = Class.extend({
            init: function (b, a) {
                this.hd = b, this.e_ = a
            },
            oH: function () {
                var a = this.hd.cy.length;
                return new W([], a)
            },
            oF: function (e) {
                var c = this.iW(e, 0),
                    b = this.hd.cy.length,
                    a = [];
                for (var d = 0; d < c.length; ++d) a.push(new W(c[d], b));
                return a
            },
            iW: function (d, c) {
                var a = this.hh(d[c]);
                if (c == d.length - 1) return a;
                var b = this.iW(d, c + 1);
                return this.iX(a, b)
            },
            n$: function (f, e) {
                var b = [];
                for (var d = 0; d < f.length; ++d) {
                    var a = this.hh(f[d]);
                    for (var c = 0; c < a.length; ++c) this.lE(b, a[c])
                }
                return b
            },
            kX: function (e, d) {
                var b = this.hh(e[d]);
                if (d == e.length - 1) {
                    b.push([]);
                    return b
                }
                var c = this.kX(e, d + 1);
                c.push([]);
                var a = this.iX(b, c);
                a.push([]);
                return a
            },
            kY: function (d, c) {
                var a = this.hh(d[c]);
                a.push([]);
                if (c == d.length - 1) return a;
                var b = this.kY(d, c + 1);
                b.push([]);
                return this.iX(a, b)
            },
            iX: function (b, c) {
                var a = [];
                for (var e = 0; e < b.length; ++e) for (var d = 0; d < c.length; ++d) this.lE(a, this.pd(b[e], c[d]));
                return a
            },
            lE: function (e, b) {
                for (var c = 0; c < e.length; ++c) if (e[c].length == b.length) {
                    var a = !0;
                    for (var d = 0; a && d < b.length; ++d) a = e[c][d].u == b[d].u;
                    if (a) return
                }
                e.push(b)
            },
            pd: function (c, d) {
                var f = null,
                    e = null;
                c.length > d.length ? (f = [].concat(c), e = d) : (f = [].concat(d), e = c);
                var a = 0;
                for (var b = 0; b < e.length; ++b) {
                    while (a < f.length && f[a].u < e[b].u)++a;
                    a >= f.length ? f.push(e[b]) : f[a].u > e[b].u && f.splice(a, 0, e[b]), ++a
                }
                return f
            },
            hh: function (a) {
                if (a instanceof ch) {
                    if (a.name == d.bV) return this.n$(a.cw, 0);
                    if (a.name == d.dZ) return this.kX(a.cw, 0);
                    if (a.name == d.fb) return this.kY(a.cw, 0);
                    if (a.name == d.eR) return [[]]
                } else if (a instanceof be) return this.iW(a.V, 0);
                var b = a instanceof bM ? a.O : null,
                    c = this.hd.lr(a, !0, b, this.e_);
                return [[c]]
            }
        }),
        bK = ca.extend({
            init: function (a) {
                this._super(), this.bo = a, this.Z()
            },
            W: function () {
                for (;;) {
                    ++this.dx, this.ji = this.dx < this.bo.data.length ? this.bo.data[this.dx] : null;
                    if (this.ji == null) return !1;
                    if (this.er()) return !0
                }
            },
            bC: function () {
                return this.bo.columns.length
            },
            ci: function (a) {
                return this.bo.G[a]
            },
            bd: function (a) {
                return this.ji == null ? null : this.ji[a]
            },
            ch: function (a) {
                return this.bo.columns[a].O
            }
        }),
        bL = ca.extend({
            init: function (b) {
                this._super(), this.dS = b, this.bD = b.getColumnNames() || [], this.jn = [];
                for (var a = 0; a < this.bD.length; ++a) this.jn.push(this.bD[a].toUpperCase());
                this.pg = by(this.jn), this.dx = -1, this.jw = !1
            },
            Z: function () {
                this.dx = -1, this.dS.reset()
            },
            W: function () {
                for (;;) {
                    ++this.dx, this.jw = this.dS.next();
                    if (!this.jw) return !1;
                    if (this.er()) return !0
                }
            },
            bC: function () {
                return this.bD.length
            },
            ci: function (a) {
                return this.pg[a]
            },
            bd: function (a) {
                return this.jw ? this.dS.getValue(this.bD[a]) : null
            },
            ch: function (a) {
                return this.jn[a]
            }
        }),
        $ = ca.extend({
            init: function (b, a, c) {
                this._super(), this.dv = b, this.du = a, this.cX = c, this.fE = b.bC(), this.pA = this.fE + a.bC(), this.Z()
            },
            Z: function () {
                this.dx = -1, this.hx = !1, this.dv.Z(), this.du.Z(), this.jy = !1, this.fB = -1, this.lI = {}, this.ei = !0
            },
            W: function () {
                if (this.cX == d.p) {
                    this.hx || (this.hx = !0, this.ei = this.dv.W());
                    while (this.ei) {
                        while (this.du.W()) if (this.er()) {
                            ++this.dx;
                            return !0
                        }
                        this.ei = this.dv.W(), this.ei && this.du.Z()
                    }
                } else {
                    var a = this.cX == d.B ? this.du : this.dv,
                        b = this.cX == d.B ? this.dv : this.du;
                    if (this.jy != !0) {
                        var c = !1;
                        this.hx || (this.hx = !0, this.ei = a.W(), c = !0);
                        while (this.ei) {
                            while (b.W()) {
                                ++this.fB;
                                if (this.er()) {
                                    ++this.dx, this.cX == d.G && (this.lI[this.fB] = !0);
                                    return !0
                                }
                            }
                            if (c) {
                                ++this.dx;
                                return !0
                            }
                            this.ei = a.W(), c = !0, this.ei && (b.Z(), this.fB = -1)
                        }
                        this.cX == d.G && (this.jy = !0, b.Z(), this.fB = -1)
                    }
                    if (this.jy) while (b.W()) {
                        ++this.fB;
                        if (!this.lI[this.fB]) {
                            ++this.dx;
                            return !0
                        }
                    }
                }
                return !1
            },
            bC: function () {
                return this.pA
            },
            ci: function (c) {
                var a = this.dv.ci(c),
                    b = this.du.ci(c);
                if (a == -1) return b == -1 ? -1 : this.fE + b;
                if (b == -1) return a;
                throw new Exception(d.ff)
            },
            bd: function (a) {
                return a < this.fE ? this.dv.bd(a) : this.du.bd(a - this.fE)
            },
            ch: function (a) {
                return a < this.fE ? this.dv.ch(a) : this.du.ch(a - this.fE)
            }
        }),
        bO = ca.extend({
            init: function (b, a) {
                this._super(), this.y = b, this.dP = a, this.cN = b.cN, this.Z()
            },
            Z: function () {
                this.hy = new t(this.dP, 0), this.bU = null, this.lN = !1
            },
            W: function () {
                this.lN == !1 && (this.np(), this.lN = !0, this.hy.Z()), this.bU = this.hy.W();
                return this.bU != null
            },
            bC: function () {
                return this.y.bC()
            },
            ci: function (a) {
                return this.cN[a]
            },
            bd: function (a) {
                return this.bU == null ? null : this.bU[a]
            },
            ch: function (a) {
                return this.y.ch(a)
            },
            np: function () {
                this.y.Z();
                while (this.y.W()) {
                    var b = this.y.bU;
                    if (b == null) {
                        b = [];
                        for (var a = 0; a < this.y.bC(); ++a) b.push(this.y.bd(a))
                    }
                    this.hy.kQ(b)
                }
                this.hy.sort()
            }
        }),
        t = Class.extend({
            init: function (a, b) {
                this.dP = a, this.eA = a[b], this.cV = b, this.hz = b == this.dP.length - 1, this.L = [], this.bi = {}, this.fF = 0, this.cB = -1
            },
            kQ: function (c) {
                var b = this.eA.eH.bd(),
                    a = this.bi[b];
                a == null && (a = this.hz ? [] : new t(this.dP, this.cV + 1), this.bi[b] = a, this.L.push(b), this.pv = typeof b == d.a), this.hz ? a.push(c) : a.kQ(c)
            },
            sort: function () {
                this.L.length > 1 && (this.pv ? this.L.sort(function (a, b) {
                    return a - b
                }) : this.L.sort());
                if (!this.hz) for (m in this.bi) this.bi[m].sort()
            },
            Z: function () {
                this.fF = 0, this.cB = -1
            },
            W: function () {
                var c = null;
                if (this.fF < this.L.length) {
                    var b = this.eA.gh ? this.L[this.fF] : this.L[this.L.length - (this.fF + 1)],
                        a = this.bi[b];
                    if (this.hz) {
                        ++this.cB;
                        if (this.cB < a.length) return a[this.cB];
                        ++this.fF, this.cB = -1;
                        return this.W()
                    }
                    c = a.W();
                    if (c == null) {
                        ++this.fF;
                        return this.W()
                    }
                }
                return c
            }
        }),
        bW = ca.extend({
            init: function (b, a) {
                this._super(), this.bQ = b, this.ce = a, this.cN = this.bQ.cN, this.Z()
            },
            Z: function () {
                this.bU = null, this.gc = [], this.eW = [], this.bi = [], this.bQ.Z(), this.ce.Z(), this.fD = !0, this.gz = !1
            },
            W: function () {
                return this.kt()
            },
            bC: function () {
                return this.bQ.bC()
            },
            ci: function (a) {
                return this.cN[a]
            },
            bd: function (a) {
                return this.bU == null ? null : this.bU[a]
            },
            ch: function (a) {
                return this.bQ.ch(a)
            },
            kt: function () {
                if (this.fD) {
                    this.
                        fD = this.bQ.W();
                    if (this.fD) return this.kL(this.bQ)
                }
                if (this.ce.W()) return this.kL(this.ce);
                return !1
            },
            ha: function () {
                while (this.kt()) this.kJ();
                this.gz = !0
            },
            kJ: function () {
                this.ej = this.iZ(0, this.bi.length - 1);
                if (this.ej < 0) {
                    this.ej = -(this.ej + 1), this.bi.splice(this.ej, 0, this.bU), this.gc.splice(this.ej, 0, this.fD ? 1 : 0), this.eW.splice(this.ej, 0, this.fD ? 0 : 1);
                    return !0
                }
                this.fD ? ++this.gc[this.ej] : ++this.eW[this.ej];
                return !1
            },
            iZ: function (c, b) {
                if (b < c) return -(c + 1);
                var d = Math.floor((b + c) / 2),
                    a = this.pb(this.bU, this.bi[d]);
                if (a == 0) return d;
                return a < 0 ? this.iZ(c, d - 1) : this.iZ(d + 1, b)
            },
            pb: function (b, c) {
                for (var a = 0; a < b.length; ++a) if (b[a] != c[a]) return b[a] < c[a] ? -1 : 1;
                return 0
            },
            kL: function (a) {
                this.bU = a.bU;
                if (this.bU == null) {
                    this.bU = [];
                    for (var b = 0; b < a.bC(); ++b) this.bU.push(a.bd(b))
                }
                return !0
            }
        }),
        bP = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            },
            W: function () {
                var a = this._super();
                while (a && !this.kJ()) a = this._super();
                return a
            }
        }),
        bR = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            }
        }),
        bS = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            },
            Z: function () {
                this._super(), this.br = -1
            },
            W: function () {
                this.gz || this.ha(), ++this.br;
                while (this.br < this.bi.length && this.eW[this.br] > 0)++this.br;
                if (this.br < this.bi.length) {
                    this.bU = this.bi[this.br];
                    return !0
                }
                return !1
            }
        }),
        bT = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            },
            Z: function () {
                this._super(), this.br = 0, this.eK = 0
            },
            W: function () {
                this.gz || this.ha();
                while (this.br < this.bi.length && this.eK >= this.gc[this.br] - this.eW[this.br])++this.br, this.eK = 0;
                if (this.br < this.bi.length) {
                    this.bU = this.bi[this.br], ++this.eK;
                    return !0
                }
                return !1
            }
        }),
        bU = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            },
            Z: function () {
                this._super(), this.br = -1
            },
            W: function () {
                this.gz || this.ha(), ++this.br;
                while (this.br < this.bi.length && (this.gc[this.br] == 0 || this.eW[this.br] == 0))++this.br;
                if (this.br < this.bi.length) {
                    this.bU = this.bi[this.br];
                    return !0
                }
                return !1
            }
        }),
        bV = bW.extend({
            init: function (b, a) {
                this._super(b, a)
            },
            Z: function () {
                this._super(), this.br = 0, this.eK = 0
            },
            W: function () {
                this.gz || this.ha();
                while (this.br < this.bi.length && this.eK >= Math.min(this.gc[this.br], this.eW[this.br]))++this.br, this.eK = 0;
                if (this.br < this.bi.length) {
                    this.bU = this.bi[this.br], ++this.eK;
                    return !0
                }
                return !1
            }
        }),
        b_ = Class.extend({
            init: function (b, c, d, a) {
                this.name = b, this.bO = c, this.fd = d, this.bw = a, this.bw.dD && this.ie()
            },
            ie: function () {
                for (var a in this.bw) if (a != d.t) {
                    var b = Z.catalog.getTable(a);
                    !b || b.pt(this)
                }
            },
            jO: function () {
                for (var a in this.bw) if (a != d.t) {
                    var b = Z.catalog.getTable(a);
                    !b || b.mX(this)
                }
            },
            getTableNames: function () {
                var a = [];
                for (var b in this.bw) b != d.t && a.push(b);
                return a
            },
            getPersistenceScope: function () {
                return Z.catalog.getTable(this.bO).getPersistenceScope()
            },
            setPersistenceScope: function (a) {
                return Z.catalog.getTable(this.bO).setPersistenceScope(a)
            },
            mZ: function (a, b, c) {
                if (this.bw.dD) {
                    var d = this.ok(c);
                    Z.insertRow(this.bO, [++this.fd, b, a, d])
                }
            },
            ok: function (b) {
                var f = [],
                    a = [];
                for (var c = 0; c < b.length; ++c) if (b[c] == null) f.push("0"), a.push("");
                else if (typeof b[c] === d.w) f.push("b"), a.push(b[c] ? 1 : 0);
                else if (typeof b[c] === d.a) {
                    var e = b[c].toString();
                    f.push(e.indexOf(".") >= 0 ? "f" : "i"), a.push(e)
                } else b[c] instanceof Date && typeof b[c].getTime == d.i ? (f.push("d"), a.
                    push(b[c].getTime().toString())) : (f.push("s"), a.push(b[c]));
                a.unshift(f.join(""));
                return bd.cM(4, a)
            },
            oq: function (d) {
                var b = bd.cL(4, d),
                    e = b.shift(),
                    a = e.length < b.length ? e.length : b.length;
                for (var c = 0; c < a; ++c) switch (e.charAt(c)) {
                    case "0":
                        b[c] = null;
                        break;
                    case "i":
                        b[c] = parseInt(b[c]);
                        break;
                    case "f":
                        b[c] = parseFloat(b[c]);
                        break;
                    case "b":
                        b[c] = b[c] == "1";
                        break;
                    case "d":
                        b[c] = new Date(parseInt(b[c]))
                }
                return b
            },
            getChangedRows: function (b) {
                var a = null,
                    e = null;
                if (b != null) {
                    typeof b == d.b && (b = [b]);
                    for (var f = 0; f < b.length; ++f) {
                        b[f] = b[f].toUpperCase();
                        if (this.bw[b[f]] == null) throw new Exception(d.dI + this.name + d.fI + b[f])
                    }
                    b.length > 0 && (b.length == 1 ? e = d.fV + b[0] + "'" : e = d.fU + b.join(d.fD) + d.fE)
                }
                var c = d.dT + this.bO;
                e && (c += e), c += d.fW;
                var g = Z.queryCursor(c),
                    h = [];
                while (g.next()) {
                    var i = {};
                    i[d.cm] = g.getValue(0), i[d.bK] = g.getValue(1), i[d.br] = g.getValue(2), i[d.P] = this.oq(g.getValue(3)), h.push(i)
                }
                return h
            },
            getChangedRowObjects: function (a) {
                var g = this.getChangedRows(a);
                for (var e = 0; e < g.length; ++e) {
                    var c = this.bw[g[e][d.br]];
                    if ( !! c) {
                        var b = g[e][d.P],
                            h = {};
                        for (var f = 0;
                             f < c.length && f < b.length; ++f) h[c[f]] = b[f];
                        g[e][d.P] = h
                    }
                }
                return g
            },
            beginTracking: function () {
                this.ie(), this.bw.dD = !0, Z.changeTrackers.jN(this)
            },
            isTracking: function () {
                return this.bw.dD
            },
            endTracking: function () {
                this.jO(), this.bw.dD = !1, Z.changeTrackers.jN(this)
            },
            clearChanges: function () {
                Z.catalog.getTable(this.bO).replaceData([])
            }
        }),
        b$ = Class.extend({
            init: function () {
                this.bI = {}, this.kk()
            },
            kk: function () {
                var e = {};
                if (Z.catalog.getTable(d.d) != null) if (Z.catalog.getTable(d.d).getColumnNames().length != 4) this.jg();
                else {
                    var g = Z.query(d.dS + d.d);
                    if (g.data.length == 0) this.jg();
                    else for (var f = 0; f < g.data.length; ++f) {
                        var a = g.data[f],
                            h = a[0],
                            c = this.get(h),
                            j = a[2] == 1;
                        if (!c) if (Z.catalog.getTable(a[1]) == null) Z.deleteRow(d.d, a);
                        else {
                            var i = Z.queryValue(d.dV + a[1]),
                                b = this.op(a[3]);
                            b.dD = j, c = this.lp(h, a[1], i == null ? -1 : i, b)
                        } else j != c.bw.dD && (c.bw.dD = j);
                        !c || (e[h] = c, j ? c.ie() : c.jO())
                    }
                }
                this.bI = e
            },
            jj: function () {
                Z.catalog.getTable(d.d) == null && Z.catalog.createTable({
                    tableName: d.d,
                    columns: [d.bq, d.ch, d.cs, d.cj],
                    primaryKey: [d.bq]
                })
            },
            jg: function () {
                Z.catalog.dropTable(d.d)
            },
            ov: function (a) {
                Z.catalog.getTable(a) == null && (this.jj(), Z.catalog.createTable({
                    tableName: a,
                    columns: [d.bD, d.bK, d.ci, d.cn],
                    primaryKey: [d.bD]
                }))
            },
            ol: function (a) {
                Z.catalog.dropTable(a)
            },
            nH: function (a) {
                this.jj();
                var b = this.lk(a.bw);
                Z.insertRow(d.d, [a.name, a.bO, a.bw.dD ? 1 : 0, b])
            },
            jN: function (a) {
                this.jj();
                var b = this.lk(a.bw);
                Z.updateRow(d.d, [a.name, a.bO, a.bw.dD ? 1 : 0, b])
            },
            oo: function (e) {
                if (Z.catalog.getTable(d.d) != null) {
                    var b = d.dW + d.d + d.fT + e.name + "'",
                        c = Z.queryRow(b);
                    Z.deleteRow(d.d, c);
                    var a = Z.queryValue(d.dU + d.d);
                    a == 0 && this.jg()
                }
            },
            lk: function (f) {
                var g = [],
                    a = 0;
                for (var b in f) if (b != d.t) {
                    ++a, g.push(b);
                    var c = f[b];
                    g.push(c.length);
                    for (var e = 0; e < c.length; ++e) g.push(c[e])
                }
                g.unshift(a);
                return g.join(" ")
            },
            op: function (e) {
                var d = {},
                    f = e.split(" "),
                    c = 0,
                    a = parseInt(f[c]);
                while (a-- > 0) {
                    var b = d[f[++c]] = [],
                        g = parseInt(f[++c]);
                    while (g-- > 0) b.push(f[++c])
                }
                return d
            },
            create: function (c, b) {
                if (b == null || !b.length) throw new Exception(d.fk);
                if (typeof c != d.b) throw new Exception(d.cP);
                if (this.get(c) != null) throw new Exception(d.fj + c + d.fK);
                typeof b == d.b && (b = [b]);
                for (var h = 0; h < b.length; ++h) {
                    var e = b[h].toUpperCase();
                    if (e == d.d || e.length > 13 && e.substr(0, 13) == d.bS) throw new Exception(d.dA);
                    if (Z.catalog.getTable(e) == null) throw new Exception(d.da + e)
                }
                c = c.toUpperCase();
                var f = d.bS + c;
                this.ov(f);
                var a = this.ox(b);
                a.dD = !0;
                var g = this.lp(c, f, -1, a);
                this.nH(g);
                return g
            },
            lp: function (b, c, e, a) {
                var d = new b_(b, c, e, a);
                this.bI[b] = d;
                return d
            },
            ox: function (b) {
                var a = {};
                for (var e = 0; e < b.length; ++e) {
                    var c = Z.catalog.getTable(b[e]);
                    a[c[d.c]] = c.getColumnNames()
                }
                return a
            },
            getAll: function () {
                var a = [];
                for (var b in this.bI) a.push(this.bI[b]);
                return a
            },
            get: function (a) {
                return this.bI[a.toUpperCase()]
            },
            drop: function (a) {
                var c = a.toUpperCase(),
                    b = this.bI[c];
                b != null && (b.endTracking(), delete this.bI[c], this.oo(b), this.ol(b.bO))
            }
        });
    Z.onready(function () {
        Z.changeTrackers = new b$
    });
    var _ = [];
    Z.nR = function () {
        return _
    }, Z.addTableProvider = function (a) {
        _.push(a)
    }, Z.removeTableProvider = function (b) {
        for (var a = _.length - 1; a >= 0; --a) _[a] == b && _.splice(a, 1)
    }, typeof window.db == d.e && (window.db = Z)
})()