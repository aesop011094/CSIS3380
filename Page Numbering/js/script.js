// Access the contact-list element
var contactList = document.querySelector('.contact-list');

// Get the total number of contacts
var total = users.length;

// Update the total number in the HTML
var totalElement = document.querySelector('.page-header h3');
totalElement.textContent = `Total: ${total}`;

var contactPerPage = 10;

var totalPages = Math.ceil(total/contactPerPage);

function displayContacts(page){
    contactList.innerHTML = '';

    var startIdx = (page - 1) * contactPerPage;
    var endIdx = startIdx + contactPerPage;

    // Iterate over the users array and create HTML elements for each user
    for (var i = startIdx; i < endIdx && i < total; i++) {
        
        var user = users[i];
    
        // Create HTML elements
        var listItem = document.createElement('li');
        listItem.classList.add('contact-item', 'cf');
    
        var contactDetails = document.createElement('div');
        contactDetails.classList.add('contact-details');
    
        var avatar = document.createElement('img');
        avatar.classList.add('avatar');
        avatar.src = user.image;
    
        var credential = document.createElement('h3');
        credential.textContent = user.name;
    
        var email = document.createElement('span');
        email.classList.add('email');
        email.textContent = user.name.toLowerCase().replace(' ', '.') + '@example.com';
    
        var joinedDetails = document.createElement('div');
        joinedDetails.classList.add('joined-details');
    
        var joinedDate = document.createElement('span');
        joinedDate.classList.add('date');
        joinedDate.textContent = 'Joined ' + user.joined;
    
        // Append the created elements to their respective parent elements
        contactDetails.appendChild(avatar);
        contactDetails.appendChild(credential);
        contactDetails.appendChild(email);
    
        joinedDetails.appendChild(joinedDate);
    
        listItem.appendChild(contactDetails);
        listItem.appendChild(joinedDetails);
    
        // Append the list item to the contact-list
        contactList.appendChild(listItem);
    }
}

displayContacts(1);

var pagingElement = document.querySelector('.pagination');

for(var i=1; i <= totalPages; i++){
    var listItem = document.createElement('li');
    var link = document.createElement('a');

    link.textContent = i;
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var page = parseInt(event.target.textContent);
        displayContacts(page);
    });

    listItem.appendChild(link);

    pagingElement.appendChild(listItem);
}

