"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
    [193],
    {
        2193: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            var l = n(3673);
            const s = {
                    class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
                },
                o = (0, l._)(
                    "div",
                    { style: { "font-size": "30vh" } },
                    " 404 ",
                    -1
                ),
                c = (0, l._)(
                    "div",
                    { class: "text-h2", style: { opacity: ".4" } },
                    " Oops. Nothing here... ",
                    -1
                );
            function a(e, t, n, a, r, p) {
                const u = (0, l.up)("q-btn");
                return (
                    (0, l.wg)(),
                    (0, l.iD)("div", s, [
                        (0, l._)("div", null, [
                            o,
                            c,
                            (0, l.Wm)(u, {
                                class: "q-mt-xl",
                                color: "white",
                                "text-color": "blue",
                                unelevated: "",
                                to: "/",
                                label: "Go Home",
                                "no-caps": "",
                            }),
                        ]),
                    ])
                );
            }
            const r = (0, l.aZ)({ name: "Error404" });
            var p = n(4260),
                u = n(522),
                i = n(7518),
                d = n.n(i);
            const h = (0, p.Z)(r, [["render", a]]),
                f = h;
            d()(r, "components", { QBtn: u.Z });
        },
    },
]);
