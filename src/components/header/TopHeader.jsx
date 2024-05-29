import React from "react";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <section id="topBar">
      <div className="container">
        <div className="topRow">
          <div className="topLeftBox box">
            <ul>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99956 0C6.73575 0.000135345 5.48995 0.299675 4.36421 0.874081C3.23847 1.44849 2.26483 2.28142 1.52305 3.30464C0.781263 4.32786 0.292439 5.51226 0.0966193 6.76081C-0.0992003 8.00936 0.0035564 9.28654 0.396472 10.4877C0.789387 11.6889 1.46128 12.7799 2.35711 13.6714C3.25295 14.5628 4.34723 15.2294 5.55032 15.6164C6.75341 16.0035 8.03108 16.1 9.27866 15.8981C10.5262 15.6961 11.7082 15.2015 12.7278 14.4548L11.9384 13.38C10.7294 14.2654 9.25725 14.7176 7.75964 14.6637C6.26203 14.6097 4.82626 14.0528 3.68399 13.0828C2.54172 12.1128 1.75957 10.7862 1.46374 9.31708C1.16791 7.84799 1.37565 6.32208 2.05345 4.98554C2.73124 3.649 3.83956 2.57978 5.19957 1.95042C6.55959 1.32105 8.09198 1.16823 9.5495 1.51662C11.007 1.865 12.3047 2.69428 13.2331 3.87064C14.1615 5.047 14.6665 6.50184 14.6666 8.00042V9.33382C14.6666 9.68746 14.5261 10.0266 14.276 10.2767C14.026 10.5267 13.6868 10.6672 13.3332 10.6672C12.9795 10.6672 12.6404 10.5267 12.3903 10.2767C12.1403 10.0266 11.9998 9.68746 11.9998 9.33382V8.00042C12.003 7.05923 11.6754 6.14682 11.0743 5.42262C10.4731 4.69843 9.63659 4.2085 8.71088 4.03845C7.78517 3.86839 6.82914 4.02902 6.00984 4.49227C5.19053 4.95551 4.56006 5.69192 4.22858 6.57281C3.89709 7.45371 3.88568 8.42307 4.19633 9.31153C4.50699 10.2 5.11995 10.951 5.92812 11.4334C6.73629 11.9158 7.68828 12.0989 8.61773 11.9507C9.54719 11.8025 10.395 11.3324 11.0131 10.6226C11.2974 11.1404 11.7461 11.5487 12.2883 11.783C12.8306 12.0174 13.4355 12.0644 14.0074 11.9166C14.5794 11.7688 15.0858 11.4346 15.4466 10.9669C15.8074 10.4992 16.0022 9.92455 16 9.33382V8.00042C15.9977 5.87928 15.1541 3.84567 13.6542 2.3458C12.1543 0.84593 10.1207 0.00229417 7.99956 0ZM7.99956 10.6672C7.47212 10.6672 6.95652 10.5108 6.51796 10.2178C6.07941 9.92475 5.7376 9.50826 5.53576 9.02096C5.33391 8.53367 5.2811 7.99746 5.384 7.48015C5.4869 6.96284 5.74089 6.48766 6.11385 6.1147C6.48681 5.74174 6.96199 5.48775 7.47929 5.38485C7.9966 5.28195 8.53281 5.33477 9.02011 5.53661C9.5074 5.73845 9.9239 6.08027 10.2169 6.51882C10.51 6.95738 10.6664 7.47297 10.6664 8.00042C10.6664 8.7077 10.3854 9.38601 9.88528 9.88614C9.38516 10.3863 8.70684 10.6672 7.99956 10.6672Z"
                      fill="#007078"
                    />
                  </svg>
                </span>
                <Link to="mailto:instrumentindia@doublelok.com" className="">
                  instrumentindia@doublelok.com
                </Link>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 16C3.58867 16 0 12.4113 0 8C0 3.58867 3.58867 0 8 0C12.4113 0 16 3.58867 16 8C16 12.4113 12.4113 16 8 16ZM8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333ZM11.3333 8C11.3333 7.63133 11.0353 7.33333 10.6667 7.33333H8.66667V4C8.66667 3.63133 8.368 3.33333 8 3.33333C7.632 3.33333 7.33333 3.63133 7.33333 4V8C7.33333 8.36867 7.632 8.66667 8 8.66667H10.6667C11.0353 8.66667 11.3333 8.36867 11.3333 8Z"
                      fill="#007078"
                    />
                  </svg>
                </span>
                Mon-Fri: 8AM to 5PM MST
              </li>
            </ul>
          </div>
          <div className="topRightBox box">
            <ul>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="none"
                  >
                    <path
                      d="M6.84083 11.0833C6.84083 11.7261 6.99009 12.3351 7.25596 12.8764C6.68457 13.6091 6.32892 14.5179 6.28111 15.5085C5.18382 14.3558 4.50866 12.7971 4.50866 11.0844C4.50866 7.10492 8.14918 3.95958 12.2736 4.80658C14.7014 5.30591 16.6686 7.26242 17.1864 9.68793C17.3426 10.4206 17.3718 11.1381 17.2925 11.8241C17.2248 12.4051 16.7153 12.8344 16.1299 12.8344H16.0774C15.3871 12.8344 14.902 12.2196 14.9778 11.5336C15.0291 11.0728 15.0023 10.5886 14.8845 10.0951C14.537 8.63326 13.3453 7.44909 11.8818 7.11192C9.21615 6.49942 6.83966 8.52009 6.83966 11.0844L6.84083 11.0833ZM2.30475 9.57243C2.62426 7.71392 3.53264 6.01992 4.94127 4.69808C6.72422 3.02624 9.05873 2.20024 11.5063 2.3519C16.1159 2.65057 19.7203 6.69075 19.6666 11.5278C19.6445 13.5531 17.949 15.1655 15.9258 15.1655H13.1202C12.8357 14.1983 11.9518 13.4866 10.893 13.4866C9.60446 13.4866 8.56081 14.5308 8.56081 15.82C8.56081 17.1091 9.60446 18.1533 10.893 18.1533C11.5203 18.1533 12.0882 17.9025 12.5068 17.4988H15.9258C19.213 17.4988 21.9522 14.8796 21.9988 11.5919C22.0851 5.50075 17.5117 0.402396 11.6568 0.0243947C8.55031 -0.177439 5.60361 0.878398 3.34723 2.99707C1.59927 4.63625 0.436678 6.80625 0.0180526 9.14076C-0.109051 9.8501 0.451837 10.5011 1.17131 10.5011C1.72171 10.5011 2.21263 10.1173 2.30475 9.5736V9.57243ZM10.9221 19.8333C6.61344 19.8333 2.88546 22.5073 1.64591 26.4857C1.45351 27.1005 1.7975 27.755 2.41203 27.9475C3.02539 28.133 3.67957 27.7947 3.87197 27.181C4.28127 25.8662 5.09869 24.7438 6.14817 23.8852L7.78186 26.3363C8.19582 26.957 9.10654 26.957 9.5205 26.3363L10.9828 24.1407L12.445 26.3363C12.859 26.957 13.7697 26.957 14.1837 26.3363L15.7731 23.9517C16.7841 24.8022 17.5712 25.9 17.97 27.181C18.1262 27.6803 18.5857 28 19.0836 28C19.199 28 19.3145 27.9825 19.4311 27.9475C20.0456 27.755 20.3884 27.1005 20.1972 26.4857C18.9576 22.5073 15.2297 19.8333 10.921 19.8333H10.9221Z"
                      fill="#007078"
                    />
                  </svg>
                </span>
              </li>
              <li className="d-flex flex-column">
                <span>To More Inquiry</span>
                <p>
                  <Link to="tel:+919322217622">+91 93222 17622</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
