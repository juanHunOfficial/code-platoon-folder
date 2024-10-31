
function ProfileInfo () {
    return(
        <>
            <button className="edit-btn profile-card-edit-btn"></button>
            <div id="name-and-verified-symbol-container">
                <h1 id="name" >Juan Hun</h1>
                <img id="verified-symbol" src="data:image/png;base64,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" />
            </div>

            <div id="occupation-and-area-info">
                <h2 id="job-title" >Student Full-stack Software Engineer</h2>
                <p id="address-line" >Lutz, Florida, United States ·<a href="#"> Contact Info</a></p>
                <p id="connections"><a href="#">3 connections</a></p>
            </div>

            <div id="education-container">
                <div id="education-container-top-row">
                    <img id="education-exp-1-img"  src="https://media.licdn.com/dms/image/v2/D4D0BAQEely_V6eLXlg/company-logo_100_100/company-logo_100_100/0/1686776554260/code_platoon_logo?e=1738195200&v=beta&t=IllskA-0HV8P32m6UmMgLsS9VjtK8iPDGh9mkdVUjMU" />
                    <h4 id="education-exp-1"><a href="#">Code Platoon</a></h4>
                </div>
                <div id="education-container-bottom-row" >
                    <img id="education-exp-2-img" src="https://media.licdn.com/dms/image/v2/D4E0BAQEZlg6mgAJIhw/company-logo_100_100/company-logo_100_100/0/1705426852353/keiser_university_logo?e=1738195200&v=beta&t=yrk_gAQvoh9dZQH9mhGAuZiVSkVvUdBahVk8PWrB5ik" />
                    <h4 id="education-exp-2"><a href="#">Keiser University</a></h4>
                </div>
            </div>

            <div id="btn-bar-container">
                <button id="open-to-btn">Open to</button>
                <button id="add-profile-btn">Add profile section</button>
                <button id="enhance-profile-btn">Enhance profile</button>
                <button id="more-button">More</button>
            </div>
            {/* the block below is for open to work button */}
            <div id="open-to-work-container">
                <button className="edit-btn edit-btn-small"></button>
                <h4>Open to work</h4>
                <p>Software Engineer, Software Progr...</p>
                <p><a href="#">Show details</a></p>
            </div>

            <div id="showcase-services-container">
                <p><b>Showcase your services</b> as a section on your profile so your business can be easily discovered.</p>
                <h4><a href="#">Get started</a></h4>
            </div>
        </>
    )
}

export default ProfileInfo