var TTNITES = (() => {
  const TRANSLATIONS = toronites.translations;
  const VERSION = toronites.version;
  const NONCE = toronites.nonce;
  const URL = toronites.url;

  var page = 1;

  var _console = () => {
    console.log(
      `${"\n"} %c TORONITES v${VERSION} %c built with love ${"\n"}`,
      "color: #7289DA; background: #23272A; padding:4px 0;",
      "background: #FFFFFF; padding:4px 0;"
    );
  };

  var _header = () => {
    var last_known_scroll_position = 0;
    var scrollDown = 0;
    var ticking = false;
    var header = document.querySelector(".hd");

    var _doSomething = (scroll_pos) => {
      var scroll_up = last_known_scroll_position;

      if (scroll_up < scrollDown) {
        header.classList.remove("a");
      } else {
        header.classList.add("a");
      }

      scrollDown = scroll_up;

      if (last_known_scroll_position >= 150) {
        header.classList.add("b");
      } else {
        header.classList.remove("b");
      }
    };

    window.addEventListener("scroll", () => {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          _doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
  };

  var _posts = () => {
    const _elements = () => {
      var elements = document.querySelectorAll(".more-info");

      elements.forEach((element) => {
        var tooltip = document.querySelector(".post.info");
        var wrapper = element.parentNode.parentNode;

        if (wrapper !== null) {
          var rect = element.getBoundingClientRect();
          var rext = tooltip.getBoundingClientRect();

          var right = Math.round(rect.right + rext.width - 1);

          if (right > wrapper.offsetWidth) {
            element.classList.add("tt-right");
          } else {
            element.classList.remove("tt-right");
          }
        }
      });
    };

    // window.addEventListener("mousemove", () => _elements());

    // window.addEventListener("resize", () => _elements());

    window.addEventListener("click", () => _elements());
  };

  var _grids = () => {
    var elements = document.querySelectorAll("[data-grids]");

    if (elements !== null) {
      elements.forEach((element) => {
        element.addEventListener("click", (event) => {
          var evt = event.currentTarget;

          var chg = document.querySelector(".change-view");
          var lst = document.querySelector(".post-lst");

          if (chg !== null && lst !== null) {
            var _setCookies = (name, value, days) => {
              const d = new Date();
              d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookie = name + "=" + value + ";" + expires + ";path=/";
            };

            _setCookies("toronites_list", evt.dataset.grids, 365);

            if (!lst.classList.contains("on")) {
              chg.classList.add("on");
              chg.classList.remove("off");

              lst.classList.add("on");
              lst.classList.remove("off");
            } else {
              chg.classList.add("off");
              chg.classList.remove("on");

              lst.classList.add("off");
              lst.classList.remove("on");
            }
          }
        });
      });
    }
  };

  var _plyr1 = () => {
    var player = document.querySelector("[data-player]");

    if (player === null) {
      return;
    }

    var options = document.querySelectorAll("[data-option]");

    options.forEach((element) => {
      element.addEventListener("click", (event) => {
        var mv = event.currentTarget;

        if (mv !== null) {
          var tpnv = document.querySelectorAll(".bx.options > ul > li > a");

          if (!mv.classList.contains("on")) {
            tpnv.forEach((element) => {
              element.classList.remove("on");
            });

            var plyr = document.querySelector("[data-player]");

            if (plyr !== null) {
              var embed = plyr.querySelector("iframe") || plyr.firstChild;
              embed.src = window.atob(mv.dataset.src);
            }

            mv.classList.add("on");
          }
        }
      });
    });
  };

  var _plyr2 = () => {
    var links = document.querySelectorAll("[data-link]");

    links.forEach((element) => {
      element.addEventListener("click", (event) => {
        var mv = event.currentTarget;

        if (mv !== null) {
          window.open(window.atob(mv.dataset.url));
        }
      });
    });
  };

  var _swpr1 = () => {
    new Swiper(".mySwiper2", {
      loop: false,
      spaceBetween: 8,
      thumbs: {
        swiper: new Swiper(".mySwiper", {
          loop: false,
          spaceBetween: 8,
          slidesPerView: 5,
          //freeMode: true,
          //watchSlidesProgress: true,
        }),
      },
    });
  };

  var _swpr2 = () => {
    new Swiper(".mySwipers", {
      slidesPerView: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8,
        },
      },
    });
  };

  var _favorites = () => {
    var favorites = document.querySelectorAll("[data-favorites]");

    favorites.forEach((element) => {
      element.addEventListener("click", (event) => {
        var mv = event.currentTarget;

        if (mv !== null) {
          var mvps = mv.dataset.post;
          var mvtp = mv.dataset.type;

          var vars = JSON.stringify({
            _wpfavorites: NONCE,

            post: mvps,
            type: mvtp,
          });

          fetch(URL, {
            method: "POST",
            body: new URLSearchParams({
              action: "action_favorites",
              vars,
            }),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-WP-Nonce": NONCE,
            },
            credentials: "same-origin",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const ic = mv.querySelector("button > i");

              if (ic !== null) {
                if (!ic.classList.contains("fa-times")) {
                  if (data.status == 200) {
                    ic.classList.remove("fas", "fa-heart");
                    ic.classList.add("fa-heart", "far");
                  }

                  if (data.status == 201) {
                    ic.classList.remove("fa-heart", "far");
                    ic.classList.add("fas", "fa-heart");
                  }
                }

                if (ic.classList.contains("fa-times")) {
                  // mv.parentNode.remove();
                  mv.remove();
                }
              }
            });
        }
      });
    });
  };

  var _filters = () => {
    var filters = document.querySelector("[data-filters]");
    var results = document.querySelector("[data-results]");

    if (filters !== null || results !== null) {
      var loadmore = document.querySelector("[data-loadmore]");

      if (loadmore !== null) {
        loadmore.addEventListener("click", (event) => {
          var mv = event.currentTarget;

          if (mv !== null) {
            _load();
          }
        });
      }

      var clear = null;
      var has = "";

      filters.addEventListener("click", (event) => {
        clearTimeout(clear);

        clear = setTimeout(() => {
          var _genres = filters.querySelectorAll("[data-genre]");
          var _years = filters.querySelectorAll("[data-year]");
          var _sorts = filters.querySelectorAll("[data-sort]");

          var genres = [];
          var years = [];

          var sort = 1;

          page = 1;

          for (var _genre of _genres) {
            if (_genre.classList.contains("on")) {
              genres.push(_genre.dataset.genre);
            }
          }

          for (var _year of _years) {
            if (_year.classList.contains("on")) {
              years.push(_year.dataset.year);
            }
          }

          for (var _sort of _sorts) {
            if (_sort.classList.contains("on")) {
              sort = _sort.dataset.sort;
            }
          }

          var vars = JSON.stringify({
            _wpsearch: NONCE,

            taxonomy: filters.dataset.taxonomy,
            search: filters.dataset.search,
            term: filters.dataset.term,
            type: filters.dataset.type,
            genres: genres,
            years: years,
            sort: sort,
            page: page,
          });

          if (has != "" && has != window.btoa(vars)) {
            has = window.btoa(vars);

            fetch(URL, {
              method: "POST",
              body: new URLSearchParams({
                action: "action_search",
                vars,
              }),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-WP-Nonce": NONCE,
              },
              credentials: "same-origin",
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                if (data.next && loadmore !== null) {
                  var mv = loadmore.querySelector("button");

                  if (mv !== null) {
                    mv.disabled = false;
                  }
                }

                if (!data.next && loadmore !== null) {
                  var mv = loadmore.querySelector("button");

                  if (mv !== null) {
                    mv.disabled = true;
                  }
                }

                if (data.html) {
                  var _sctn = results.parentNode;

                  if (_sctn !== null) {
                    var _p = _sctn.querySelector("p.tac");

                    if (_p !== null) {
                      if (_p.classList.contains("hdd")) {
                        _p.classList.remove("hdd");
                      }
                    }

                    var p = _sctn.querySelector("p.norslts");

                    if (p !== null) {
                      p.remove();
                    }
                  }

                  results.innerHTML = "";
                  results.insertAdjacentHTML("beforeend", data.html);
                } else {
                  var _sctn = results.parentNode;

                  if (_sctn !== null) {
                    var _p = _sctn.querySelector("p.tac");

                    if (_p !== null) {
                      _p.classList.add("hdd");
                    }

                    results.innerHTML = "";

                    const p = document.createElement("p");

                    p.classList.add("norslts", "fa-video-slash", "tac");
                    p.innerHTML = TRANSLATIONS.empty;

                    _sctn.appendChild(p);
                  }
                }
              });
          } else {
            has = window.btoa(vars);
          }
        }, 225);
      });
    }
  };

  var _sgnp = () => {
    var form = document.getElementById("form-sgnp");

    if (form !== null) {
      var bt = form.querySelector("button");

      bt.addEventListener("click", () => {
        const elements = form.elements;
        const data = {};

        for (i = 0; i < elements.length; i++) {
          if (elements[i].name) {
            data[elements[i].name] = elements[i].value;
          }
        }

        var body = new FormData();

        for (var k in data) {
          body.append(k, data[k]);
        }

        fetch(URL, {
          method: "POST",
          headers: {
            "X-WP-Nonce": NONCE,
          },
          credentials: "same-origin",
          body: body,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.status == 200) {
              location.reload();
            }

            if (data.status != 200) {
              var val = form.querySelector(".inp.val-no");

              if (val !== null) {
                let span = form.querySelector(".val.dtx");

                if (span !== null) {
                  span.innerHTML = data.error;
                } else {
                  span = document.createElement("span");
                  span.classList.add("val", "dtx");
                  span.innerHTML = data.error;

                  val.appendChild(span);
                }
              }
            }
          });
      });
    }
  };

  var _lgn = () => {
    var form = document.getElementById("form-lgn");

    if (form !== null) {
      var bt = form.querySelector("button");

      bt.addEventListener("click", () => {
        const elements = form.elements;
        const data = {};

        for (i = 0; i < elements.length; i++) {
          if (elements[i].name) {
            data[elements[i].name] = elements[i].value;
          }
        }

        var body = new FormData();

        for (var k in data) {
          body.append(k, data[k]);
        }

        fetch(URL, {
          method: "POST",
          headers: {
            "X-WP-Nonce": NONCE,
          },
          credentials: "same-origin",
          body: body,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.status == 200) {
              location.reload();
            }

            if (data.status != 200) {
              var val = form.querySelector(".inp.val-no");

              if (val !== null) {
                let span = form.querySelector(".val.dtx");

                if (span !== null) {
                  span.innerHTML = data.error;
                } else {
                  span = document.createElement("span");
                  span.classList.add("val", "dtx");
                  span.innerHTML = data.error;

                  val.appendChild(span);
                }
              }
            }
          });
      });
    }
  };

  /** Shared */

  var _load = () => {
    var filters = document.querySelector("[data-filters]");
    var results = document.querySelector("[data-results]");

    if (filters !== null || results !== null) {
      var loadmore = document.querySelector("[data-loadmore]");
      var clear = null;

      clearTimeout(clear);

      clear = setTimeout(() => {
        var _genres = filters.querySelectorAll("[data-genre]");
        var _years = filters.querySelectorAll("[data-year]");
        var _sorts = filters.querySelectorAll("[data-sort]");

        var genres = [];
        var years = [];

        var sort = 1;

        page++;

        for (var _genre of _genres) {
          if (_genre.classList.contains("on")) {
            genres.push(_genre.dataset.genre);
          }
        }

        for (var _year of _years) {
          if (_year.classList.contains("on")) {
            years.push(_year.dataset.year);
          }
        }

        for (var _sort of _sorts) {
          if (_sort.classList.contains("on")) {
            sort = _sort.dataset.sort;
          }
        }

        var vars = JSON.stringify({
          _wpsearch: NONCE,

          taxonomy: filters.dataset.taxonomy,
          search: filters.dataset.search,
          term: filters.dataset.term,
          type: filters.dataset.type,
          genres: genres,
          years: years,
          sort: sort,
          page: page,
        });

        fetch(URL, {
          method: "POST",
          body: new URLSearchParams({
            action: "action_search",
            vars,
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          credentials: "same-origin",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.next && loadmore !== null) {
              var mv = loadmore.querySelector("button");

              if (mv !== null) {
                mv.disabled = false;
              }
            }

            if (!data.next && loadmore !== null) {
              var mv = loadmore.querySelector("button");

              if (mv !== null) {
                mv.disabled = true;
              }
            }

            if (data.html) {
              results.insertAdjacentHTML("beforeend", data.html);
            }
          });
      }, 225);
    }
  };

  return {
    init: () => {
      _console();
      _header();

      _posts();
      _grids();

      _plyr1();
      _plyr2();

      _swpr1();
      _swpr2();

      _favorites();
      _filters();

      _sgnp();
      _lgn();
    },
  };
})();

/** Webpack */
if (typeof module !== "undefined") {
  module.exports = TTNITES;
}

/** Vanilla */
if (window.addEventListener) {
  window.addEventListener("ready", TTNITES.init(), false);
} else {
  window.onload = TTNITES.init();
}
