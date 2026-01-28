import "../styles/globals.css";
import { useRouter } from "next/router";
import react, { useEffect, useRef, useState, useCallback } from "react";
import { gsap, Power4, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import NavBar from "../components/nav/Navbar";
import Cursor from "../components/cursor/Cursor";
import Menu from "../components/menu/Menu";
import Overlay from "../components/overlay/overlay";
import LoaderMain from "../components/loader/Loader";
import Footer from "../components/footer/Footer";
import { AppContextProvider } from "../utils/Context";
import DiningForm from "../components/booking/dining";
import BottomNav from "../components/nav/BottomNav";
function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);
  const { scroll } = useLocomotiveScroll();
  const router = useRouter();
  const containerRef = useRef(null);
  const [showMenu, setMenuVisiblity] = useState(false);
  const [showDiningForm, setDining] = useState(false);
  const [showOverlay, setOverlayVisiblity] = useState(false);
  const [showLoader, setLoaderVisiblity] = useState(true);

  const overLayTimeOut = useRef();
  const routeChangeTimeout = useRef();

  const routeChangeStart = (url, { shallow }) => {
    // overLayToogler();
  };
  const routeChangeComplete = (url, { shallow }) => {
    var overLayTime = setTimeout(() => {
      hideOverlay();
    }, 1500);
    overLayTimeOut.current = overLayTime;
  };

  const handleLoad = () => {
    console.log("Load complete");
    setLoaderVisiblity(false);
    animateHeroBackground();
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    return () => {
      window.removeEventListener("load", this.handleLoad);
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      clearTimeout(routeChangeTimeout.current);
      clearTimeout(overLayTimeOut.current);
    };
  }, []);

  const showOverLay = () => {
    if (showMenu) setMenuVisiblity(false);
    setOverlayVisiblity(true);
  };

  const hideOverlay = () => {
    heroBackgroundReset();
    setOverlayVisiblity(false);
    toTop();
    animateHeroBackground();
  };

  const toTop = () => {
    scroll && scroll.scrollTo(0);
  };

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: "0.05",
        smartphone: {
          smooth: false,
        },
        tablet: {
          smooth: false,
        },
      }}
      watch={[router]}
      containerRef={containerRef}
      onLocationChange={(scroll) => {
        console.log("Location Change");
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }} // If you want to reset the scroll position to 0 for example
      onUpdate={(scroll) => {
        //console.log('On Update');
        // scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }} // Will trigger on
    >
      <LoaderMain show={showLoader} />
      <Overlay show={showOverlay} />
      <ScrollTriggerProxy />

      <Cursor />
      <AppContextProvider
        handleLinksClick={(link, e) => {
          e.preventDefault();
          showOverLay();
          // Check if user tries to navigage to same URL or not
          if (router.pathname === link) {
            hideOverlay();
            return;
          }
          scroll && scroll.scrollTo(0);
          //scroll.scrollTo(0, { duration: 0, disableLerp: true })
          const routeChangeTime = setTimeout(() => {
            router.push(link);
          }, 1000);
          routeChangeTimeout.current = routeChangeTime;
        }}
      >
        <Menu toogle={showMenu} />
        <DiningForm
          toogle={showDiningForm}
          onClose={() => setDining((showDiningForm) => !showDiningForm)}
        />
        <NavBar
          state={showMenu}
          onDiningClick={() => setDining(true)}
          onChange={() => setMenuVisiblity(!showMenu)}
        />
        <main className="container" data-scroll-container ref={containerRef}>
          <div data-scroll-section>
            <Component {...pageProps} onLoad={scroll} />
            <Footer />
          </div>
        </main>
        <BottomNav
          onDining={(e) => {
            e.preventDefault();
            setDining((showDiningForm) => !showDiningForm);
          }}
        />
      </AppContextProvider>
    </LocomotiveScrollProvider>
  );
}

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // pinType: typeof(element.style.transform)==undefined ? "fixed" : element.style.transform ? "transform" : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    }

    //   return () => {
    //     ScrollTrigger.addEventListener("refresh", () => scroll?.update());
    //     ScrollTrigger.refresh();
    //     console.log("Unload");
    //   };
  }, [scroll]);

  return null;
};

export default MyApp;

function heroBackgroundReset() {
  gsap.to(".bg-image", {
    scale: 1.5,
    duration: 0,
  });
  gsap.to(".blur__text", {
    scale: 1.7,
    duration: 0,
    filter: "blur(5px)",
  });
}

function animateHeroBackground() {
  gsap.to(".bg-image", {
    scale: 1.02,
    duration: 3,
    ease: Expo.out,
  });
  gsap.to(".blur__text", {
    scale: 1.02,
    duration: 4,
    delay: 0.2,
    filter: "blur(0px)",
    ease: Power4.out,
  });
}
