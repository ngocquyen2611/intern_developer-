const baseURL = "http://localhost:3000/members";

// Biến toàn cục để lưu ID của thành viên đang được sửa
var currentUpdateId = null;

function start() {
    getMembers(function(members) {
        renderMembers(members);
    });

    handleCreateForms();
    handleUpdateForms();
} 
start();

// --- READ ---
function getMembers(callback) {
    fetch(baseURL) 
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

// --- CREATE ---
function createMember(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(baseURL, options)  
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

// --- RENDER ---
function renderMembers(members) {
    var listMembersBlock = document.querySelector('#list-members')
    var htmls = members.map(function(member) {
        return `
            <li class="member-item flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex-1 min-w-0 pr-4">
                    <h4 class="text-base font-semibold text-gray-900 truncate">${member.name}</h4>
                    <p class="text-sm text-gray-500 truncate">${member.title}</p>
                </div>
                <div class="flex space-x-2 flex-shrink-0">
                    <button onclick="handleEditMember('${member.id}', '${member.name}', '${member.title}')" 
                        class="bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium py-1.5 px-3 rounded transition-colors duration-150">
                        Sửa
                    </button>
                    <button onclick="handleDeleteMember('${member.id}')" 
                        class="bg-shrink bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1.5 px-3 rounded transition-colors duration-150">
                        Xóa
                    </button>
                </div>
            </li>
        `;
    });
    listMembersBlock.innerHTML = htmls.join('');
}

// --- CREATE DOM EVENT ---
function handleCreateForms() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var title = document.querySelector('input[name="title"]').value;
        
        var formData = {
            name: name,
            title: title
        };

        createMember(formData, function() {
            getMembers(renderMembers);
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="title"]').value = '';
        });
    }
}

// --- DELETE ---
function handleDeleteMember(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa thành viên này không?")) {
        return; 
    }

    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(baseURL + '/' + id, options)  
        .then(function(response){
            return response.json();
        })
        .then(function() {
            getMembers(renderMembers);
        });
}

// PUT
function updateMember(id, data, callback) {
    var options = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    fetch(baseURL + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleEditMember(id, name, title) {
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="title"]').value = title;
    
    currentUpdateId = id;

    var createBtn = document.querySelector('#create');
    var updateBtn = document.querySelector('#update');
    
    if (createBtn) createBtn.style.display = 'none';
    if (updateBtn) updateBtn.style.display = 'inline-block';
}


function handleUpdateForms() {
    var updateBtn = document.querySelector('#update');
    
    if (!updateBtn) return;

    updateBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var title = document.querySelector('input[name="title"]').value;
        
        var formData = {
            name: name,
            title: title
        };

        if (currentUpdateId) {
            updateMember(currentUpdateId, formData, function() {

                getMembers(renderMembers);
                
                document.querySelector('input[name="name"]').value = '';
                document.querySelector('input[name="title"]').value = '';
                
                document.querySelector('#create').style.display = 'inline-block';
                document.querySelector('#update').style.display = 'none';
                
                currentUpdateId = null;
            });
        }
    }
}