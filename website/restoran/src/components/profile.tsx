import { fetchRestaurantProfile } from '@/lib/api';
import Link from 'next/link';

export default async function profilePage() {
  const profiles = await fetchRestaurantProfile();

  return (
    <>
      {/* About Section */}
      {profiles.map(profile => (

        <section id="about" className="about section"  key={profile.id}>
          {/* Section Title */}
          <div className="container section-title pb-24" data-aos="fade-up">
            <h2>
              About Us
              <br />
            </h2>
            <div className="d-flex justify-content-center items-center mt-4">
              <img src={profile.logo} className="img-fluid mb-0 rounded-full" width={150} height={150} alt="" />
            </div>
            <p>
              {/* <span>Learn More</span>{" "} */}
              <span className="description-title">{profile.name}</span>
            </p>
            <div className='container'>
              <p className='fst mt-0' style={{ fontSize: '24px' }}>{profile.address} {profile.phone}</p>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div>
                  <p className="fst-italic text-center">
                    {profile.about_us}
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="250">
                <div className="content ps-0 pl-0 text-center">

                  <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="info-item d-flex align-items-center mx-2" data-aos="fade-up" data-aos-delay="400">
                        <div>
                          <Link href={profile.email}>
                            <div className='d-flex align-items-center'>
                              <i className="icon bi bi-envelope flex-shrink-0 mr-2" />
                              <h3 className='small mb-0'>Email</h3>
                            </div>
                          </Link>

                          {/* <p className='small'>{profile.email}</p> */}
                        </div>
                      </div>
                      <div className="info-item d-flex align-items-center mx-2" data-aos="fade-up" data-aos-delay="300">
                        <div>
                          <Link href={profile.facebook} target="_blank">
                            <div className='d-flex align-items-center'>
                              <i className="icon bi bi-facebook flex-shrink-0 mr-2" />
                              <h3 className='small mb-0'>Facebook</h3>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="info-item d-flex align-items-center mx-2" data-aos="fade-up" data-aos-delay="200">
                        <div>
                          <Link href={profile.instagram}>
                            <div className='d-flex align-items-center'>
                              <i className="icon bi bi-instagram flex-shrink-0 mr-2" />
                              <h3 className='small mb-0'>Instagram</h3>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="info-item d-flex align-items-center mx-2" data-aos="fade-up" data-aos-delay="500">
                        <div>
                          <Link href={profile.twitter}>
                          <div className='d-flex align-items-center'>
                            <i className="icon bi bi-twitter flex-shrink-0 mr-2" />
                            <h3 className='small mb-0'>Twitter</h3>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      ))
      }

      {/* /About Section */}
    </>
  );
}