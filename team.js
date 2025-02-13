

const myTeam = [
    {
        name: "Papa Balla SOW",
        role: "CEO",
        description: "Balla is the CEO for Tokki-Jamm..."
    },
    {
        name: "Penda MBAYE",
        role: "Head HR",
        description: "Penda is the Head of Human Resources."
    },
    {
        name: "Ndella WADE",
        role: "Delivery Head",
        description: "Ndella is the responsible for..."
    }
]

const team = document.getElementById("teamMembers")

for(member of myTeam){
console.log(member),
team.innerHTML += `<div id="teamMember">
                        <div class="memberImg">
                            <img src="./assets/avatar.jpeg" alt="image">
                        </div>
                        <div class="memberAbout">
                            <h6>${member.name}</h6>
                            <p>${member.description}</p>
                            <div>${member.role}</div>
                        </div>
                    </div>
                ` 

            }
