// this api is from randomuser.me website
const loadFriends = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayFriends(data))
}
const displayFriends = data => {
    const friends = data.results;
    const friendsDiv = document.getElementById('friends');
    for (const friend of friends) {
        console.log(friend.email)
        const p = document.createElement('p');
        p.innerText = `
        Name: ${friend.name.title} ${friend.name.first} ${friend.name.last} 
        email: ${friend.email}
        `;
        friendsDiv.appendChild(p);
    }
}