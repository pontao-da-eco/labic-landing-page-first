(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
    [122],
    {
        4122: (a, e, l) => {
            "use strict";
            l.r(e), l.d(e, { default: () => v });
            var t = l(3673),
                o = l(1698),
                s = l.n(o);
            function n(a, e, l, o, n, r) {
                const i = (0, t.up)("q-img"),
                    p = (0, t.up)("q-btn"),
                    u = (0, t.up)("q-space"),
                    c = (0, t.up)("q-toolbar"),
                    h = (0, t.up)("q-header"),
                    d = (0, t.up)("router-view"),
                    m = (0, t.up)("q-page-container"),
                    b = (0, t.up)("q-layout");
                return (
                    (0, t.wg)(),
                    (0, t.j4)(
                        b,
                        { view: "lHh lpr lFf" },
                        {
                            default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                    h,
                                    { elevated: "" },
                                    {
                                        default: (0, t.w5)(() => [
                                            (0, t.Wm)(
                                                c,
                                                {
                                                    class: "bg-primary text-accent",
                                                },
                                                {
                                                    default: (0, t.w5)(() => [
                                                        (0, t.Wm)(
                                                            p,
                                                            {
                                                                flat: "",
                                                                to: "/#home",
                                                            },
                                                            {
                                                                default: (0,
                                                                t.w5)(() => [
                                                                    (0, t.Wm)(
                                                                        i,
                                                                        {
                                                                            class: "q-ma-md",
                                                                            width: "200px",
                                                                            alt: "Inovação Cidadã",
                                                                            src: s(),
                                                                        }
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            }
                                                        ),
                                                        (0, t.Wm)(u),
                                                        (0, t._)("div", null, [
                                                            ((0, t.wg)(!0),
                                                            (0, t.iD)(
                                                                t.HY,
                                                                null,
                                                                (0, t.Ko)(
                                                                    a.links,
                                                                    (a) => (
                                                                        (0,
                                                                        t.wg)(),
                                                                        (0,
                                                                        t.j4)(
                                                                            p,
                                                                            {
                                                                                flat: "",
                                                                                key: a.label,
                                                                                label: a.label,
                                                                                to: a.hash,
                                                                                class: "text-no-wrap",
                                                                            },
                                                                            null,
                                                                            8,
                                                                            [
                                                                                "label",
                                                                                "to",
                                                                            ]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                                (0, t.Wm)(m, null, {
                                    default: (0, t.w5)(() => [(0, t.Wm)(d)]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        }
                    )
                );
            }
            const r = (0, t.aZ)({
                name: "MainLayout",
                data: function () {
                    return {
                        links: [
                            { label: "AO Vivo", hash: "#aovivo" },
                            { label: "O Projeto", hash: "#oprojeto" },
                            { label: "Inscrições", hash: "#inscricoes" },
                            {
                                label: "Ações Participantes",
                                hash: "#acoesparticipantes",
                            },
                            { label: "Programação", hash: "#programacao" },
                            {
                                label: "Edições Anteriores",
                                hash: "#edicoesanteriores",
                            },
                            { label: "Mentores e Colabs", hash: "#mentores" },
                            { label: "Materiais", hash: "#materiais" },
                        ],
                    };
                },
                setup() {},
                methods: {},
            });
            var i = l(4260),
                p = l(3066),
                u = l(3812),
                c = l(9570),
                h = l(2452),
                d = l(4152),
                m = l(2025),
                b = l(2652),
                f = l(7518),
                w = l.n(f);
            const g = (0, i.Z)(r, [["render", n]]),
                v = g;
            w()(r, "components", {
                QLayout: p.Z,
                QHeader: u.Z,
                QToolbar: c.Z,
                QBtn: h.Z,
                QImg: d.Z,
                QSpace: m.Z,
                QPageContainer: b.Z,
            });
        },
        1698: (a, e, l) => {
            a.exports = l.p + "img/logo.7daa7f1e.png";
        },
    },
]);
