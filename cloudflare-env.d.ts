// The template can optionally bind D1; this portfolio does not provision a database.
declare namespace Cloudflare { interface Env { DB?: D1Database; } }
