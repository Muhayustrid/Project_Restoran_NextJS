import { fetchMenus, fetchCategories } from '@/lib/api';
import Link from 'next/link';

export default async function MenuPage() {
  const menus = await fetchMenus();
  const categories = await fetchCategories();

  return (
    <>
      {/* Menu Section */}
      <section id="menu" className="menu section p-0">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span>Our</span>{" "}
            <span className="description-title">Resto Keluarga Solo Menu</span>
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <ul
            className="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {categories.map((category, index) => (
              <li className="nav-item" key={category.id}>
                <a
                  className={`nav-link ${index === 0 ? 'active show' : ''}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#menu-${category.name.toLowerCase()}`}
                >
                  <h4>{category.name}</h4>
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`tab-pane fade ${index === 0 ? 'active show' : ''}`}
                id={`menu-${category.name.toLowerCase()}`}
              >
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>{category.name}</h3>
                </div>
                <div className="row gy-5">
                  {menus
                    .filter(menu => menu.category === category.name)
                    .map(menu => (
                      <div key={menu.id} className="col-lg-4 menu-item">
                        <Link href={menu.image || '#'} className="glightbox">
                          <img
                            src={menu.image}
                            className="menu-img img-fluid"
                            alt={menu.name}
                          />
                        </Link>
                        <h4>{menu.name}</h4>
                        <p className="ingredients">{menu.description}</p>
                        <p className="price">$ {menu.price.toLocaleString()}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Menu Section */}
    </>
  );
}