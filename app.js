document.addEventListener("DOMContentLoaded", function () {
       
var friends = ['Rich', 'Onyx', 'Jovonna', 'Jarita', 'Maddy'];

var someLocations = ['gym', 'kitchen', 'bathroom', 'laundry room', 'bedroom', 'living room', 'dining room', 'office', 'garden', 'theater room', 'mud room'];

var weapons = ['fire sword', 'gun', 'shield', 'knife', 'boko bat', 'moblin arm', 'tree branch', 'heros sword', 'korko leaf', 'travelers sword', 'hammer', 'spoon', 'poison', 'axe', 'karate', 'candlestick', 'car', 'paperclips', 'nail clippers'];


for (var i = 0; i <= 100; i++) {
    
    var header = document.createElement('h3');
    header.textContent = 'Accusation ' + i;
        document.body.appendChild(header);
        header.addEventListener('click', returnAlert(i))
    
        function returnAlert(i) {
            function showAlert() {
                alert("Accusation " + [i++] + ': I accuse ' + friends[i % friends.length] + ', with the ' + weapons[i % weapons.length] + ' in the ' + someLocations[i % someLocations.length] + '!')
            }
            return showAlert;
        };
    };
});