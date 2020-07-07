function Binomial_fac(n) {
    var a = 1;
    for (var z = 1; z <= n; z++) {
        a = a * z
    }
    return (a)
}


function Binomial_fp(n, x) {
    return Binomial_fac(n) / [Binomial_fac(n - x) * Binomial_fac(x)];
}

function Binomial_sp(p, x, n) {
    var q = 1 - p;
    return (p ** x) * [(q) ** (n - x)];
}

function binomial(n, p, x) {
    return Binomial_fp(n, x) * Binomial_sp(p, x, n);
}

function Binomial_XLx(n, p, x) {
    var temp = 0;
    for (var i = 0; i < x; i++) {                                             //case 1
        temp = temp + binomial(n, p, i);
    }
    return temp;
}
function Binomial_XGx(n, p, x) {
    var temp;
    temp = 1 - Binomial_XLEx(n, p, x);
    return temp;
}

function Binomial_XLEx(n, p, x) {
    var temp = 0;
    for (var i = 0; i <= x; i++) {
        temp = temp + binomial(n, p, i);                   //case 3
    }
    return temp;
}

function Binomial_XGEx(n, p, x) {
    var temp;
    temp = 1 - Binomial_XLx(n, p, x);
    return temp;
}

function Binomial_x1Xx2(n, p, x) {
    var temp = 0;
    for (var i = x1; i <= x2; i++) {
        temp = temp + binomial(n, p, i);
    }
    return temp;
}
function Gamma_sp(x, k, t) {
    return ([x ** (k - 1)] * Math.E ** (-(x / t)));
}

function Gamma_fp(k, t) {
    return (1 / [math.gamma(k) * (t ** k)]);
}

function gamma(x, k, t) {
    return ((Gamma_fp(k, t) * Gamma_sp(x, k, t)));
}
function Cauchy_fp(q, x0, g) {
    return (1 + (((q - x0) / g) ** 2));
}

function Cauchy_sp(q, x0, g) {
    return (1 / [Math.PI * g * Cauchy_fp(q, x0, g)]);
}

function cauchy(q, x0, g) {
    return (Cauchy_sp(q, x0, g));
}
function Normal_fp() {
    return [1 / (Math.sqrt(2 * Math.PI))]
}

function Normal_sp(x, mu, s) {
    var a = ((x - mu) / s) ** 2;
    var z = -a;
    return (Math.E ** [(z) / (2)]);
}

function normal(x, mu, s) {
    return (Normal_fp() * (Normal_sp(x, mu, s)));
}
function uniform(b, a) {
    return (1 / (b - a));
}