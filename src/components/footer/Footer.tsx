import { footerLinks } from './footer-links';
export const Footer = () => (
  <footer className="footer footer-l bg-custom-background_white">
    <div className="element-wrapper">Wrapper</div>
  </footer>
);

/* <div className="footer_wrapper w-full flex flex-wrap ">
      {footerLinks.map((section, index) => (
        <div key={index} className=" sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 py-10">
          <h3 className="">{section.title}</h3>
          <ul>
            {section.items.map((item, index) => (
              <li className="text-custom-textWeak text-sm" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */
