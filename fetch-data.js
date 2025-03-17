document.addEventListener("DOMContentLoaded", function() {
    async function fetchUserData()  {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById("api-data");
        try{
            let response = await fetch(apiUrl);
            let users = await response.json();
            dataContainer.innerHTML = " ";
            const userList = document.createElement("ul");
    
            users.forEach(user => {
                const liElement = document.createElement("li");
                liElement.textContent =user.name;
                userList.appendChild(liElement);
            })
    
            dataContainer.appendChild(userList);
        }
    
        catch{
            dataContainer.textContent = 'Failed to load user data.'
        }
        
    }
    
    fetchUserData();
    
})