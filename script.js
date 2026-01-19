const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", short: "Вершина кільцевих автоперегонів світу.", full: "«Формула-1» — чемпіонат світу з кільцевих автоперегонів на автомобілях з відкритими колесами... [весь твій текст про F1]" },
    { name: "Ралі (WRC)", cat: "Off-Road", short: "Чемпіонат світу з ралі.", full: "WRC — термін, що означає Чемпіонат світу з ралі та клас автомобілів World Rally Car..." },
    { name: "NASCAR", cat: "Asphalt", short: "Американські перегони серійних авто.", full: "Національна Асоціація перегонів серійних автомобілів — найбільша організація в США..." },
    { name: "IndyCar", cat: "Asphalt", short: "Найпрестижніша серія Північної Америки.", full: "Найпрестижніша серія автоперегонів з відкритими колесами Північної Америки..." },
    { name: "24h Le Mans", cat: "Asphalt", short: "Найвідоміші перегони на витривалість.", full: "24 Години Ле-Мана — найвідоміші автомобільні перегони на витривалість у Франції..." },
    { name: "Drifting", cat: "Special", short: "Мистецтво керування в заносі.", full: "Техніка проходження поворотів з навмисним зривом провідної осі..." },
    { name: "Dakar Rally", cat: "Off-Road", short: "Трансконтинентальний ралі-марафон.", full: "Щорічний трансконтинентальний ралі-рейд, що проводиться з 1978 року..." },
    { name: "Formula E", cat: "Asphalt", short: "Електричні боліди.", full: "Інноваційний чемпіонат для повністю електричних болідів на вуличних трасах." },
    { name: "Superbike (WSBK)", cat: "Bikes", short: "Чемпіонат на серійних байках.", full: "Чемпіонат світу з шосейно-кільцевих перегонів на вдосконалених версіях серійних мотоциклів." },
    { name: "Drag Racing", cat: "Special", short: "Парні заїзди на прискорення.", full: "Парні заїзди на максимальне прискорення по прямій трасі довжиною 402 метри." },
    { name: "Rallycross (WRX)", cat: "Off-Road", short: "Контактні перегони на змішаних трасах.", full: "Контактні перегони на коротких кільцевих трасах: асфальт та ґрунт." },
    { name: "Karting", cat: "Asphalt", short: "Початкова школа автоспорту.", full: "Машини без підвіски з ідеальною керованістю. Фундамент для пілотів F1." },
    { name: "DTM", cat: "Asphalt", short: "Німецька кузовна серія.", full: "Серія, де змагаються прототипи, зовні схожі на серійні дорожні авто." },
    { name: "Enduro", cat: "Bikes", short: "Витривалість на бездоріжжі.", full: "Мотоциклетні змагання на складних маршрутах із природними перешкодами." },
    { name: "Hillclimb", cat: "Special", short: "Підйом вгору на час.", full: "Максимально швидкий підйом по небезпечному гірському серпантину." },
    { name: "Speedway", cat: "Bikes", short: "Гонки без гальм по овалу.", full: "Гонки на мотоциклах без гальм по гаревому або піщаному покриттю." },
    { name: "Baja 1000", cat: "Off-Road", short: "Пустельна гонка через Каліфорнію.", full: "Позашляхова гонка для багі, вантажівок та мотоциклів через півострів Каліфорнія." },
    { name: "Extreme E", cat: "Off-Road", short: "Електричні позашляховики.", full: "Міжнародна серія перегонів на електричних SUV у віддалених частинах світу." },
    { name: "GT World Challenge", cat: "Asphalt", short: "Гран-турізмо суперкари.", full: "Престижні перегони автомобілів класу GT, що базуються на серійних суперкарах." },
    { name: "Autocross", cat: "Off-Road", short: "Маневреність на багі.", full: "Змагання на маневреність та швидкість на закритих ґрунтових трасах." }
];

const grid = document.getElementById('grid');
const modal = document.getElementById('infoModal');

function getCategoryColor(cat) {
    switch(cat) {
        case 'Asphalt': return '#a855f7'; 
        case 'Off-Road': return '#ff007f'; 
        case 'Bikes': return '#00f2ff';    
        case 'Special': return '#7000ff';  
        default: return '#ffffff';
    }
}

function displaySports(data) {
    grid.innerHTML = "";
    data.forEach(sport => {
        const color = getCategoryColor(sport.cat);
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = color;
        card.style.setProperty('--glow', color);

        card.innerHTML = `
            <div class="card-num" style="color:${color}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.short}</div>
            <div class="card-footer">CLICK TO SCAN DATA_ID</div>
        `;
        
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = sport.name;
            document.getElementById('modalBody').innerText = sport.full;
            document.getElementById('modalCat').innerText = sport.cat;
            document.getElementById('modalCat').style.color = color;
            modal.style.display = "block";
        };
        grid.appendChild(card);
    });
}

document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

displaySports(sportsData);
