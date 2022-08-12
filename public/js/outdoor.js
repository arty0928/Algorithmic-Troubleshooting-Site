
    let page = 0;
    let category = "";
    let keyword = "";
    document.addEventListener('DOMContentLoaded', load);
        window.onscroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
            }
        };

    function load() {
        //console.log("page:"+page+"category:"+category+"keyword:"+keyword);
        fetch(`/outdoor/search?page=${page}&category=${category}&keyword=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(products => {
                if (products == "") { return; }
                //onsole.log(products);
                products.forEach(productJson => {
                    addProduct(productJson);
                });
                page = page + 1;
            })
    };

    function search() {
        document.querySelector('#products').innerHTML = "";
    page = 0
    load();
        }
    function categoryChange(value) {
        category = value;
    search();
        }
    function keywordChange(value) {
        keyword = value;
        }
    function addExplain(id, title, img, organization, dday, url, category) {
            const explain = document.createElement('div');
    explain.innerHTML = `
    <div>기관</div>
    <div>${organization}</div>

    <div>제목</div>
    <div>${title}</div>

    <div>DAY</div>
    <div>${dday}</div>

    <div>카테고리:</div>
    <div>${category}</div>`;

    explain.className = 'productEx';
    document.querySelector('#product' + id).append(explain);
    //console.log(title, img, organization, dday, url, category);
        }

    function addProduct(productJson) {

            const col = document.createElement('div');
    col.className = 'col';

    const cardShadowSm = document.createElement('div');
    cardShadowSm.className = 'car shadow-sm';
    col.append(cardShadowSm);


    const link = document.createElement('a');
    link.href = productJson.url;

    cardShadowSm.append(link);

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = productJson.image;

    image.width = "100%";
    image.height = "250";
    link.append(image);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardShadowSm.append(cardBody);

    const cardName = document.createElement('h6');
    cardName.className = 'card-name';
    cardName.textContent = productJson.organization;
    cardBody.append(cardName);

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = productJson.title;
    cardBody.append(cardTitle);

    const tagBar = document.createElement('div');
    //tagBar.className = "d-flex justify-content-between align-items-center";
    tagBar.className = "tag-bar";
    cardBody.append(tagBar);


    const tags = document.createElement('div');
    //tags.textContent = productJson.tag;
    //tags.className = "badge badge-info tags"
    tags.className = "tags"
    tagBar.append(tags);

    const tagsText = document.createElement('p');
    if(productJson.tag === "교육"){
        tagsText.textContent = productJson.tag;
    tagsText.className = "badge badge-warning";
            }

    else if (productJson.tag === "강연") {
        tagsText.textContent = productJson.tag;
    tagsText.className = "badge badge-info";
            }

    else if (productJson.tag === "과학/공학") {
        tagsText.textContent = productJson.tag;
    tagsText.className = "badge badge-primary";
            }

    else {
        tagsText.textContent = productJson.tag;
    tagsText.className = "badge badge-secondary";
            }


    tags.append(tagsText);


    const day = document.createElement('div');
    //day.className = "text-muted badge badge-dark";
    day.className = "dday";
    tagBar.append(day);

    const dayText = document.createElement('p');
    dayText.className = "badge badge-dark day-text";

    //console.log(productJson.dday);
    const DeadLineTime = new Date(productJson.dday);
    const todayTime = new Date();

    const diffTime = DeadLineTime - todayTime;

    const diffDay = String(Math.floor(diffTime / (1000*60*60*24)));

            if(diffTime >= 0){
        dayText.textContent = "D-" + diffDay;
            }
    else{
        dayText.textContent = "모집 마감";
            }

    day.append(dayText);

    document.querySelector('#products').append(col);

        }
