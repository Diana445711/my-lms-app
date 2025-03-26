


function Homepage() {
    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <CourseCatalog />
                <EnrollmentList />
            </div>
            <Footer />
        </div>
    );
}
  
export default Homepage;


