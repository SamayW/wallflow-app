import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="nav-brand">
              <Image src="/img/icon-source.png" alt="" width={26} height={26} />
              Wallflow
            </a>
            <p>Turn any video into a live wallpaper for your Mac.</p>
          </div>

          <div className="footer-nav">
            <div>
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#how-it-works">How it Works</a>
                </li>
                <li>
                  <a href="#download">Download</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Wallflow. All rights reserved.</span>
          <span>Not affiliated with or endorsed by Apple Inc.</span>
        </div>
      </div>
    </footer>
  );
}
