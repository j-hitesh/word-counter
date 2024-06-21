(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[0], {
    22: function(e, t, a) {},
    29: function(e, t, a) {
        "use strict";
        a.r(t);
        var c = a(1)
          , n = a.n(c)
          , r = a(15)
          , s = a.n(r)
          , o = a(10)
          , l = (a(22),
        a(0));
        function i(e) {
            return Object(l.jsx)("div", {
                className: "footer",
                children: Object(l.jsxs)("p", {
                    className: "text-center",
                    children: ["Copyright@2024 | All Rights Reserved | by ", e.creatername]
                })
            })
        }
        var d = a(7);
        function b(e) {
            return Object(l.jsx)("nav", {
                className: "navbar navbar-expand-lg navbar-".concat(e.mode, " bg-").concat(e.mode),
                children: Object(l.jsxs)("div", {
                    className: "container-fluid",
                    children: [Object(l.jsx)(d.b, {
                        className: "navbar-brand",
                        to: "/",
                        style: {
                            color: "\t#06b6d4",
                            fontWeight: "500",
                            fontSize: "22px"
                        },
                        children: e.title
                    }), Object(l.jsx)("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: Object(l.jsx)("span", {
                            className: "navbar-toggler-icon"
                        })
                    }), Object(l.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: [Object(l.jsxs)("ul", {
                            className: "navbar-nav me-auto mb-2 mb-lg-0",
                            children: [Object(l.jsx)("li", {
                                className: "nav-item",
                                children: Object(l.jsx)(d.b, {
                                    className: "nav-link active",
                                    "aria-current": "page",
                                    to: "/",
                                    children: "Home"
                                })
                            }), Object(l.jsx)("li", {
                                className: "nav-item",
                                children: Object(l.jsx)(d.b, {
                                    className: "nav-link",
                                    to: "/about",
                                    children: e.about
                                })
                            }), Object(l.jsx)("li", {
                                className: "nav-item",
                                children: Object(l.jsx)(d.b, {
                                    className: "nav-link",
                                    to: "/contact",
                                    children: "Contact"
                                })
                            })]
                        }), Object(l.jsxs)("div", {
                            className: "form-check form-switch text-".concat("light" === e.mode ? "dark" : "light"),
                            children: [Object(l.jsx)("input", {
                                className: "form-check-input",
                                type: "checkbox",
                                onClick: e.togglemode,
                                role: "switch",
                                id: "flexSwitchCheckDefault"
                            }), Object(l.jsxs)("label", {
                                className: "form-check-label",
                                htmlFor: "flexSwitchCheckDefault",
                                children: ["Enable ", "light" === e.mode ? "dark" : "light", " Mode"]
                            })]
                        })]
                    })]
                })
            })
        }
        function h(e) {
            var t = {
                color: "#fff",
                backgroundColor: "#000",
                TextDecoderation: "none",
                fontWeight: "Bold"
            }
              , a = {
                color: "#000",
                backgroundColor: "#fff",
                TextDecoderation: "none",
                fontWeight: "500"
            };
            return Object(l.jsxs)("div", {
                className: "main py-4",
                id: "main",
                style: "dark" === e.mode ? {
                    color: "#fff",
                    backgroundColor: "transparent"
                } : {
                    color: "#000",
                    background: "transparent"
                },
                children: [Object(l.jsx)("h1", {
                    className: "text-center",
                    children: "About App"
                }), Object(l.jsx)("div", {
                    className: "container",
                    children: Object(l.jsxs)("div", {
                        className: "accordion",
                        id: "accordionExample",
                        children: [Object(l.jsxs)("div", {
                            className: "accordion-item",
                            style: "dark" === e.mode ? t : a,
                            children: [Object(l.jsx)("h2", {
                                className: "accordion-header",
                                id: "headingOne",
                                children: Object(l.jsx)("button", {
                                    style: "dark" === e.mode ? t : a,
                                    className: "accordion-button",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseOne",
                                    "aria-expanded": "true",
                                    "aria-controls": "collapseOne",
                                    id: "acc",
                                    children: "Analyse Your Text"
                                })
                            }), Object(l.jsx)("div", {
                                id: "collapseOne",
                                className: "accordion-collapse collapse show",
                                "aria-labelledby": "headingOne",
                                "data-bs-parent": "#accordionExample",
                                children: Object(l.jsx)("div", {
                                    className: "accordion-body",
                                    children: Object(l.jsx)("strong", {
                                        children: "Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable."
                                    })
                                })
                            })]
                        }), Object(l.jsxs)("div", {
                            className: "accordion-item",
                            style: "dark" === e.mode ? t : a,
                            children: [Object(l.jsx)("h2", {
                                className: "accordion-header",
                                id: "headingOne",
                                children: Object(l.jsx)("button", {
                                    style: "dark" === e.mode ? t : a,
                                    className: "accordion-button",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseOne",
                                    "aria-expanded": "true",
                                    "aria-controls": "collapseOne",
                                    id: "acc",
                                    children: "Free To Use"
                                })
                            }), Object(l.jsx)("div", {
                                id: "collapseOne",
                                className: "accordion-collapse collapse show",
                                "aria-labelledby": "headingOne",
                                "data-bs-parent": "#accordionExample",
                                children: Object(l.jsx)("div", {
                                    className: "accordion-body",
                                    children: Object(l.jsx)("strong", {
                                        children: "TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit."
                                    })
                                })
                            })]
                        }), Object(l.jsxs)("div", {
                            className: "accordion-item",
                            style: "dark" === e.mode ? t : a,
                            children: [Object(l.jsx)("h2", {
                                className: "accordion-header",
                                id: "headingOne",
                                children: Object(l.jsx)("button", {
                                    style: "dark" === e.mode ? t : a,
                                    className: "accordion-button",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseOne",
                                    "aria-expanded": "true",
                                    "aria-controls": "collapseOne",
                                    id: "acc",
                                    children: "Browser Compatible"
                                })
                            }), Object(l.jsx)("div", {
                                id: "collapseOne",
                                className: "accordion-collapse collapse show",
                                "aria-labelledby": "headingOne",
                                "data-bs-parent": "#accordionExample",
                                children: Object(l.jsx)("div", {
                                    className: "accordion-body",
                                    children: Object(l.jsx)("strong", {
                                        children: "This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc."
                                    })
                                })
                            })]
                        })]
                    })
                })]
            })
        }
        function j(e) {
            var t = Object(c.useState)("")
              , a = Object(o.a)(t, 2)
              , n = a[0]
              , r = a[1]
              , s = {
                color: "#fff",
                backgroundColor: "#3A3B3C",
                fontWeight: "400",
                fontSize: "20px"
            }
              , i = {
                color: "#000",
                backgroundColor: "#fff",
                fontWeight: "400",
                fontSize: "18px"
            }
              , d = {
                color: "#fff"
            }
              , b = {
                color: "#000"
            };
            return Object(l.jsxs)("div", {
                className: "main",
                children: [Object(l.jsxs)("div", {
                    className: "container my-5",
                    children: [Object(l.jsx)("h1", {
                        className: "text-center",
                        style: "dark" === e.mode ? d : b,
                        children: e.heading
                    }), Object(l.jsxs)("div", {
                        className: "mb-3 my-3",
                        children: [Object(l.jsx)("label", {
                            htmlFor: "text",
                            className: "form-label",
                            children: Object(l.jsx)("b", {
                                className: "keebo",
                                style: "dark" === e.mode ? d : b,
                                children: "Enter Your Text Here:"
                            })
                        }), Object(l.jsx)("textarea", {
                            className: "form-control",
                            id: "text",
                            rows: "7",
                            style: "dark" === e.mode ? s : i,
                            value: n,
                            onChange: function(e) {
                                r(e.target.value)
                            }
                        })]
                    }), Object(l.jsx)("button", {
                        disabled: 0 === n.length,
                        className: "btn btn-primary mx-1 my-1",
                        onClick: function() {
                            if ("" !== n) {
                                var t = n.toUpperCase();
                                r(t),
                                e.showAlert("Converted to Uppercase", "success")
                            } else
                                e.showAlert("There's Nothing To UpperCase Into TextBox", "warning")
                        },
                        children: "Convert Uppercase"
                    }), Object(l.jsx)("button", {
                        disabled: 0 === n.length,
                        className: "btn btn-primary mx-1 my-1",
                        onClick: function() {
                            if ("" !== n) {
                                var t = n.toLowerCase();
                                r(t),
                                e.showAlert("Converted to Lowercase", "success")
                            } else
                                e.showAlert("There's Nothing To LowerCase Into TextBox", "warning")
                        },
                        children: "Convert LowerCase"
                    }), Object(l.jsx)("button", {
                        disabled: 0 === n.length,
                        className: "btn btn-danger  mx-1 my-1",
                        onClick: function() {
                            if ("" !== n) {
                                r(""),
                                e.showAlert("Cleared the whole text", "danger")
                            } else
                                e.showAlert("There's Nothing To Clear Into TextBox", "warning")
                        },
                        children: "Clear Text"
                    }), Object(l.jsx)("button", {
                        disabled: 0 === n.length,
                        className: "btn btn-success mx-1 my-1",
                        onClick: function() {
                            if ("" !== n) {
                                var t = document.getElementById("text");
                                t.select(),
                                navigator.clipboard.writeText(t.value),
                                e.showAlert("Copied the text : " + t.value, "success")
                            } else
                                e.showAlert("There's Nothing To Copy Into TextBox", "warning")
                        },
                        children: "Copy To Clipboard"
                    }), Object(l.jsx)("button", {
                        disabled: 0 === n.length,
                        className: "btn btn-primary mx-1 my-1",
                        onClick: function() {
                            if ("" !== n) {
                                var t = n.split(/[ ]+/);
                                r(t.join(" ")),
                                e.showAlert("All extra spaces are cleared", "success")
                            } else
                                e.showAlert("There's Nothing Remove Spaces Into TextBox", "warning")
                        },
                        children: "Remove Extra Spaces"
                    })]
                }), Object(l.jsxs)("div", {
                    className: "container my-4 ",
                    style: "dark" === e.mode ? d : b,
                    children: [Object(l.jsx)("h1", {
                        children: e.summaryHead
                    }), Object(l.jsxs)("p", {
                        children: ["Nummber of words : ", n.split(" ").filter((function(e) {
                            return 0 !== e.length
                        }
                        )).length]
                    }), Object(l.jsxs)("p", {
                        children: ["Number of charecters : ", n.length]
                    }), Object(l.jsxs)("p", {
                        children: ["Reading Time: ", .008 * n.split(" ").filter((function(e) {
                            return 0 !== e.length
                        }
                        )).length]
                    }), Object(l.jsx)("h3", {
                        className: "text-center",
                        children: "Preview Document"
                    }), Object(l.jsx)("div", {
                        className: "content",
                        children: Object(l.jsx)("textarea", {
                            className: "form-control",
                            id: "text",
                            rows: "3",
                            value: n,
                            style: "dark" === e.mode ? s : i,
                            onChange: function() {
                                alert("Cannot edit in preview")
                            }
                        })
                    })]
                })]
            })
        }
        function m(e) {
            return Object(l.jsx)("div", {
                className: "AlertBox",
                children: e.alert && Object(l.jsxs)("div", {
                    className: "alert alert-".concat(e.alert.type, " alert-dismissible fade show"),
                    role: "alert",
                    children: [Object(l.jsxs)("strong", {
                        children: [function(e) {
                            var t = e.toLowerCase();
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }(e.alert.type), " "]
                    }), ": ", e.alert.msg]
                })
            })
        }
        function x(e) {
            var t = {
                color: "#fff"
            }
              , a = {
                color: "#000"
            };
            return Object(l.jsx)("div", {
                className: "main",
                children: Object(l.jsxs)("div", {
                    className: "container my-5",
                    children: [Object(l.jsx)("h1", {
                        className: "text-center",
                        style: "dark" === e.mode ? t : a,
                        children: "Contact Me"
                    }), Object(l.jsx)("div", {
                        className: "info text-center",
                        children: Object(l.jsxs)("p", {
                            style: "dark" === e.mode ? t : a,
                            children: ["Created by : Hitesh jangid", Object(l.jsx)("br", {}), "Email Address : jangidhiteshr1234@gmail.com", Object(l.jsx)("br", {}), "Github link : https://github.com/j-hitesh"]
                        })
                    })]
                })
            })
        }
        b.defaultProps = {
            title: "TextUtils",
            about: "About Us"
        };
        var u = a(2);
        var g = function() {
            var e = Object(c.useState)("light")
              , t = Object(o.a)(e, 2)
              , a = t[0]
              , n = t[1]
              , r = Object(c.useState)(null)
              , s = Object(o.a)(r, 2)
              , g = s[0]
              , p = s[1]
              , O = function(e, t) {
                p({
                    msg: e,
                    type: t
                }),
                setTimeout((function() {
                    p(null)
                }
                ), 1500)
            };
            return Object(l.jsx)(l.Fragment, {
                children: Object(l.jsxs)(d.a, {
                    children: [Object(l.jsx)(b, {
                        title: "TextUtils",
                        about: "About Us",
                        mode: a,
                        togglemode: function() {
                            "dark" === a ? (n("light"),
                            document.body.style.background = "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)",
                            O("Light mode has been enabled", "success")) : (n("dark"),
                            document.body.style.background = "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)",
                            O("Dark mode has been enabled", "success"))
                        }
                    }), Object(l.jsx)(m, {
                        alert: g
                    }), Object(l.jsxs)(u.c, {
                        children: [Object(l.jsx)(u.a, {
                            exact: !0,
                            path: "/about",
                            children: Object(l.jsx)(h, {
                                mode: a
                            })
                        }), Object(l.jsx)(u.a, {
                            exact: !0,
                            path: "/contact",
                            children: Object(l.jsx)(x, {
                                mode: a
                            })
                        }), Object(l.jsx)(u.a, {
                            exact: !0,
                            path: "/",
                            children: Object(l.jsx)(j, {
                                heading: "TextUtis - Word Counter, Charecter Counter, Remove Extra Space",
                                summaryHead: "Summery Of Your Text",
                                mode: a,
                                showAlert: O
                            })
                        })]
                    }), Object(l.jsx)(i, {
                        creatername: "Hitesh Jangid"
                    })]
                })
            })
        }
          , p = function(e) {
            e && e instanceof Function && a.e(3).then(a.bind(null, 30)).then((function(t) {
                var a = t.getCLS
                  , c = t.getFID
                  , n = t.getFCP
                  , r = t.getLCP
                  , s = t.getTTFB;
                a(e),
                c(e),
                n(e),
                r(e),
                s(e)
            }
            ))
        };
        s.a.render(Object(l.jsx)(n.a.StrictMode, {
            children: Object(l.jsx)(g, {})
        }), document.getElementById("cont1")),
        p()
    }
}, [[29, 1, 2]]]);
