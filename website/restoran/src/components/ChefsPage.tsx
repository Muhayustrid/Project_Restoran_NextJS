import { fetchChefs } from '@/lib/api';

export default async function ChefsPage() {
    const chefs = await fetchChefs();

    return (
        <section id="chefs" className="chefs section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>chefs</h2>
                    <p>
                        <span>Our</span>{" "}
                        <span className="description-title">
                            Proffesional Chefs
                            <br />
                        </span>
                    </p>
                </div>
                <div className="row gy-4">
                    {chefs.map((chef) => (
                        <div
                            key={chef.id}
                            className="col-lg-4 d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src={chef.photo || '/default-photo.jpg'}
                                        className="img-fluid"
                                        alt={chef.name}
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>{chef.name}</h4>
                                    <span>{chef.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
