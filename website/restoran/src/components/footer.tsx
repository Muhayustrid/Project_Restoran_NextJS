import { fetchOpeningHours, fetchRestaurantProfile } from '@/lib/api';

const Footer = async () => {
  const openingHours = await fetchOpeningHours();
  const profiles = await fetchRestaurantProfile();

  const formatTime = (time: string) => time.replace(/:00$/, '');
  const profile = profiles.length > 0 ? profiles[0] : null;

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          {/* Address Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon" />
            <div>
              <h4>Address</h4>
              <p>{profile ? `${profile.address}, 57169` : 'Address not available'}</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon" />
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong>{' '}
                <span>{profile ? profile.phone : 'Phone not available'}</span>
                <br />
                <strong>Email:</strong>{' '}
                <span>{profile ? profile.email : 'Email not available'}</span>
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon" />
            <div>
              <h4>Opening Hours</h4>
              <ul className="list-unstyled">
                {openingHours.map(({ day, opening_time, closing_time }, index) => (
                  <li key={index} className="d-flex justify-content-between">
                    <strong>{day}</strong>
                    <span>
                      :{formatTime(opening_time)} - {formatTime(closing_time)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              {profile?.twitter && (
                <a href={profile.twitter} target="_blank" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
              )}
              {profile?.facebook && (
                <a href={profile.facebook} target="_blank" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {profile?.instagram && (
                <a href={profile.instagram} target="_blank" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{' '}
          <strong className="px-1 sitename">Yummy</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
