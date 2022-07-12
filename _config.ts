import lume from "https://deno.land/x/lume@v1.10.0/mod.ts";

const site = lume({
    src: "./src",
    dest: "./dist",
});

site.copy("pub");

export default site;
