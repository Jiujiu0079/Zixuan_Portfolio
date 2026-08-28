document.getElementById("landing").onclick = function() {

    document.getElementById("landing").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";

};
function showSection(section) {

    let content = "";

    if (section === "Environment") {
    content = `

        <h1>Environment</h1>

        <div class="project">

            <h2>Church</h2>

            <p class="description">
                A forgotten church surrounded by abandoned graves,
                focusing on cinematic lighting and atmosphere.
            </p>

            <h3>Gallery</h3>

            <div class="gallery">
                <img src="images/environment001.png" alt="Church Morning">
                <img src="images/environment002.png" alt="Church Noon">
                <img src="images/environment003.png" alt="Church Night">
            </div>

            <h3>Architecture Sheet</h3>

            <div class="asset-sheet">
                <img src="images/environment004.png" alt="Church Architecture Views">
            </div>

            <h3>Keys</h3>

            <div class="asset-sheet">
                <img src="images/environment005.jpg" alt="Church Keys">
            </div>

            <h3>Key Assets</h3>

            <div class="asset-sheet">
                <img src="images/environment006.png" alt="Church Cross">
                <img src="images/environment007.png" alt="Church Gravestone">
            </div>

            <div class="breakdown-video">
                <video controls>
                 <source src="videos/church-breakdown.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

            </div>

        </div>

        <hr>

        <div class="project">

            <h2>Chinese Village</h2>

            <p class="description">
                An abandoned mountain village exploring traditional Chinese architecture.
            </p>

            <h3>Gallery</h3>

            <div class="gallery">
                <img src="images/environment008.png" alt="Chinese Village Morning">
                <img src="images/environment009.png" alt="Chinese Village Noon">
                <img src="images/environment010.png" alt="Chinese Village Night">
            </div>

            <h3>Architecture Sheet</h3>

            <div class="asset-sheet">
                <img src="images/environment011.png" alt="Chinese Village Architecture Views">
            </div>

            <h3>Keys</h3>

            <div class="asset-sheet">
                <img src="images/environment012.jpg" alt="Chinese Village Keys">
            </div>

            <h3>Key Assets</h3>

            <div class="asset-sheet">
                <img src="images/environment013.png" alt="Chinese Village Fence">
                <img src="images/environment014.png" alt="Chinese Village Bridge">
            </div>

            <div class="breakdown-video">
                <video controls>
                 <source src="videos/chinese-village-breakdown.mp4" type="video/mp4">
Your browser does not support the video tag.
                </video>
        </div>

        </div>

        `;
    }

    else if (section === "Architecture") {
        content = `
            <h2>Architecture</h2>

            <p class="description">
                3D architectural designs, concept sketches, and visual development.
            </p>

            <h3>Mushroom House</h3>

            <div class="Mushroom-House">
                <img src="images/Architecture001.jpg" alt="Mushroom House Hero">
                <img src="images/Architecture002.jpg" alt="Mushroom House Keys">
            </div>

        `;
    }

    else if (section === "Character") {
        content = `
            <h2>Biped</h2>

            <p class="description">
                An animated character model with detailed rigging and animation cycles.
            </p>

            <h3>Gallery</h3>

            <div class="gallery">
                <img src="images/character001.jpg" alt="Biped Hero">
            </div>

            <h3>Character Sheet</h3>

            <div class="asset-sheet">
                <img src="images/character002.jpg" alt="Biped Views">
            </div>

            <h3>Details</h3>

            <div class="asset-sheet">
                <img src="images/character003.jpg" alt="Biped Details">
            </div>

            <h3>Weapon Assets</h3>

            <div class="asset-sheet">
                <img src="images/character004.jpg" alt="Biped Weapon">
                <img src="images/character005.jpg" alt="Biped Weapon Views">
            </div>

            <div class="breakdown-video">
                <video controls>
                 <source src="videos/biped-breakdown.mp4" type="video/mp4">
Your browser does not support the video tag.
                </video>
        </div>

        `;
    }

    else if (section === "2D") {
        content = `
            <h2>2D Art</h2>

            <p class="description">
                Illustrations, concept sketches, and 2D visual development.
            </p>

            <h3>Biped</h3>

            <div class="Biped">
                <img src="images/Drawing001.jpg" alt="Biped Design">
                <img src="images/Drawing002.jpg" alt="Biped Emotion">
            </div>

            <h3>Cat</h3>

            <div class="cat">
                <img src="images/Drawing003.png" alt="Cat Design">
                <img src="images/Drawing004.png" alt="Cat Emotion">
            </div>

            <h3>Girl</h3>

            <div class="girl">
                <img src="images/Drawing005.png" alt="Girl Design">
                <img src="images/Drawing006.png" alt="Girl Emotion">
            </div>

            <h3>Weapons</h3>

            <div class="weapons">
                <img src="images/Drawing007.png" alt="Weapon Design">
                <img src="images/Drawing008.png" alt="Weapon Design">
            </div>

            <div class="drawing-video">
                <video controls>
                 <source src="videos/Hand-drawn.mp4" type="video/mp4">
Your browser does not support the video tag.
                </video>
        </div>

        `;
    }

    else if (section === "Prop") {
        content = `
            <p class="description">
                3D prop models, concept sketches, and design development.
            </p>

            <h3>Flower Ball</h3>

            <div class="Flower-Ball">
                <img src="images/Prop001.jpg" alt="Flower Ball Hero">
                <img src="images/Prop002.jpg" alt="Flower Ball Details">
            </div>

            <h3>Lantern</h3>

            <div class="Lantern">
                <img src="images/Prop003.jpg" alt="Lantern Hero">
                <img src="images/Prop004.jpg" alt="Lantern Details">
            </div>

            <h3>Coffin</h3>

            <div class="Coffin">
                <img src="images/Prop005.jpg" alt="Coffin Hero">
                <img src="images/Prop006.jpg" alt="Coffin Details">
            </div>

        `;
    }

    document.getElementById("contentBox").innerHTML = content;

}