var _a, _b, _c, _d;
//INITIAL DATA
var filter = 'All';
var sortedMenu = fakeRequisition();
var onLoadFilter = false;
var cart = [];
//calculateBodyContentWidth()
generateCards();
//EVENTS
window.addEventListener('scroll', displayBackTop);
(_a = document.querySelector('.backTop-buttom-box')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', backToTop);
document.querySelectorAll('.filter-card').forEach(function (item) {
    item.addEventListener('click', function (e) { return filterClick(e); });
});
(_b = document.querySelector('.cart-box')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', openCart);
(_c = document.querySelector('.cart-header')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', closeCart);
(_d = document.querySelector('.menu-mobile-box')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', menuAction);
//FUNCTIONS
function displayBackTop() {
    var _a, _b;
    if (window.scrollY === 0) {
        (_a = document.querySelector('.backTop-buttom-box')) === null || _a === void 0 ? void 0 : _a.classList.remove('visible');
    }
    else {
        (_b = document.querySelector('.backTop-buttom-box')) === null || _b === void 0 ? void 0 : _b.classList.add('visible');
    }
}
function backToTop() {
    window.scrollTo(0, 0);
}
function fakeRequisition() {
    var menu = [
        {
            id: 1,
            title: 'Bacon Bash',
            type: 'Burger',
            price: 4.99,
            img: 'burger.png'
        },
        {
            id: 2,
            title: 'Gourmet Grill',
            type: 'Burger',
            price: 3.99,
            img: 'burger.png'
        },
        {
            id: 3,
            title: 'Burger Bonanza',
            type: 'Burger',
            price: 4.57,
            img: 'burger.png'
        },
        {
            id: 4,
            title: 'Meaty Mirage',
            type: 'Burger',
            price: 5.25,
            img: 'burger.png'
        },
        {
            id: 5,
            title: 'Savory Symphony',
            type: 'Burger',
            price: 6.99,
            img: 'burger.png'
        },
        {
            id: 6,
            title: 'Ultimate Cheese',
            type: 'Burger',
            price: 2.99,
            img: 'burger.png'
        },
        {
            id: 7,
            title: 'Towering Temptation',
            type: 'Burger',
            price: 5.50,
            img: 'burger.png'
        },
        {
            id: 8,
            title: 'Margherita',
            type: 'Pizza',
            price: 8.99,
            img: 'pizza.png'
        },
        {
            id: 9,
            title: 'Pepperoni',
            type: 'Pizza',
            price: 9.99,
            img: 'pizza.png'
        },
        {
            id: 10,
            title: 'BBQ Chicken',
            type: 'Pizza',
            price: 13.99,
            img: 'pizza.png'
        },
        {
            id: 11,
            title: 'Hawaiian',
            type: 'Pizza',
            price: 8.30,
            img: 'pizza.png'
        },
        {
            id: 12,
            title: 'Mushroom',
            type: 'Pizza',
            price: 11.99,
            img: 'pizza.png'
        },
        {
            id: 13,
            title: 'Margherita with Prosciutto',
            type: 'Pizza',
            price: 11.45,
            img: 'pizza.png'
        },
        {
            id: 14,
            title: 'Coca-Cola',
            type: 'Drink',
            price: 1.99,
            img: 'drink.png'
        },
        {
            id: 15,
            title: 'Pepsi',
            type: 'Drink',
            price: 1.50,
            img: 'drink.png'
        },
        {
            id: 16,
            title: 'Sprite',
            type: 'Drink',
            price: 0.99,
            img: 'drink.png'
        },
        {
            id: 17,
            title: 'Fanta',
            type: 'Drink',
            price: 1.25,
            img: 'drink.png'
        },
        {
            id: 18,
            title: 'Mountain Dew',
            type: 'Drink',
            price: 1.10,
            img: 'drink.png'
        },
        {
            id: 19,
            title: 'Dr. Pepper',
            type: 'Drink',
            price: 0.89,
            img: 'drink.png'
        },
        {
            id: 20,
            title: 'Ginger Ale',
            type: 'Drink',
            price: 0.79,
            img: 'drink.png'
        },
        {
            id: 21,
            title: 'Cheesecake',
            type: 'Dessert',
            price: 8.99,
            img: 'dessert.png'
        },
        {
            id: 22,
            title: 'Ice Cream Sundae',
            type: 'Dessert',
            price: 9.99,
            img: 'dessert.png'
        },
        {
            id: 23,
            title: 'Apple Pie',
            type: 'Dessert',
            price: 12.22,
            img: 'dessert.png'
        },
        {
            id: 24,
            title: 'Chocolate Chip Cookies',
            type: 'Dessert',
            price: 5.45,
            img: 'dessert.png'
        },
        {
            id: 25,
            title: 'Brownies',
            type: 'Dessert',
            price: 7.98,
            img: 'dessert.png'
        },
        {
            id: 26,
            title: 'Chocolate Fudge',
            type: 'Dessert',
            price: 4.66,
            img: 'dessert.png'
        }
    ];
    return menu.sort(function (item1, item2) { return (item1.title < item2.title) ? -1 : 1; });
}
function calculateBodyContentWidth() {
    var _a, _b;
    var bodyWidth = (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.clientWidth;
    var cartWidth = (_b = document.querySelector('.cart-area')) === null || _b === void 0 ? void 0 : _b.clientWidth;
    var bodyContent = document.querySelector('.body-content');
    if (bodyContent instanceof HTMLElement && bodyWidth !== undefined && cartWidth !== undefined) {
        bodyContent.style.width = "".concat(bodyWidth - cartWidth, "px");
    }
}
function generateCards() {
    var _a;
    for (var i in sortedMenu) {
        var cardElement = document.querySelector('.item-card');
        if (cardElement !== null) {
            var cardImg = cardElement.querySelector('.card-img-box img');
            var cardTitle = cardElement.querySelector('.card-title');
            var cardPrice = cardElement.querySelector('.card-price');
            var cardButton = cardElement.querySelector('.card-button');
            cardElement.setAttribute('data-item', sortedMenu[i].id.toString());
            cardElement.setAttribute('data-type', sortedMenu[i].type);
            if (cardImg !== null && cardTitle !== null && cardPrice !== null && cardButton !== null) {
                cardImg.setAttribute('src', "assets/images/".concat(sortedMenu[i].img));
                cardTitle.innerHTML = sortedMenu[i].title;
                cardPrice.innerHTML = "$ ".concat(sortedMenu[i].price.toString());
            }
            var card = cardElement.cloneNode(true);
            (_a = document.querySelector('.items-box')) === null || _a === void 0 ? void 0 : _a.appendChild(card);
        }
    }
    addClickEvent();
}
function filterClick(e) {
    if (e.target instanceof Element) {
        var filterCard = e.target.closest('.filter-card');
        if (filterCard !== null && onLoadFilter === false) {
            if (!filterCard.classList.contains('selected')) {
                document.querySelectorAll('.filter-card').forEach(function (item) {
                    item.classList.remove('selected');
                });
                var filterCardData = filterCard.getAttribute('data-filter');
                if (filterCardData !== null) {
                    filter = filterCardData;
                }
                filterCard.classList.add('selected');
                filterItems(filter);
            }
        }
    }
}
function filterItems(filter) {
    //let filteredMenu = sortedMenu;
    var itemsBox = document.querySelector('.items-box');
    if (itemsBox instanceof HTMLElement) {
        itemsBox.style.opacity = '0';
        onLoadFilter = true;
        toggleLoader('flex');
    }
    document.querySelectorAll('.items-box .item-card').forEach(function (item) {
        if (item instanceof HTMLElement) {
            item.style.display = 'none';
        }
    });
    if (filter !== 'All') {
        //filteredMenu = filteredMenu.filter((item) => (item.type === filter));
        //Tenho 2 opções
        //1- removo todos os cards toda vez q filtrar
        //e chamo a função generateCards dnv
        //2-Adiciono um data-type nos cards, seleciono todos com
        //esse data-type e coloco display:none
        document.querySelectorAll('.items-box .item-card').forEach(function (item) {
            if (item instanceof HTMLElement && item.getAttribute('data-type') === filter) {
                item.style.display = 'flex';
            }
        });
        //document.querySelectorAll('.filter-card')
    }
    else {
        document.querySelectorAll('.items-box .item-card').forEach(function (item) {
            if (item instanceof HTMLElement) {
                item.style.display = 'flex';
            }
        });
    }
    setTimeout(function () {
        if (itemsBox instanceof HTMLElement) {
            itemsBox.style.opacity = '1';
            onLoadFilter = false;
            toggleLoader('none');
        }
    }, 2000);
}
function toggleLoader(display) {
    var itemsLoader = document.querySelector('.items-loader');
    if (itemsLoader instanceof HTMLElement) {
        itemsLoader.style.display = display;
    }
}
function addClickEvent() {
    document.querySelectorAll('.items-box .card-button').forEach(function (item) {
        item.addEventListener('click', function (e) { return handleAddCartButton(e); });
    });
}
function handleAddCartButton(e) {
    if (e.target instanceof Element) {
        var itemCard = e.target.closest('.item-card');
        if (itemCard !== null) {
            var itemIdString = itemCard.getAttribute('data-item');
            if (itemIdString !== null) {
                var itemId_1 = parseInt(itemIdString);
                var existingItem = cart.filter(function (element) { return element.id === itemId_1; });
                if (existingItem.length === 0) {
                    cart.push({
                        id: itemId_1,
                        qtd: 1
                    });
                }
                else {
                    existingItem[0].qtd += 1;
                }
            }
        }
    }
    //console.log(cart);
    displayNotification();
    updateCart();
}
function openCart() {
    var cartArea = document.querySelector('.cart-area');
    if (cartArea instanceof HTMLElement) {
        if (cart.length > 0) {
            cartArea.classList.add('shown');
        }
        else {
            cartArea.classList.remove('shown');
        }
    }
}
function displayNotification() {
    var _a, _b, _c;
    var notificationBox = (_a = document.querySelector('.models .notification-box')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
    var notificationBoxQtd = document.querySelectorAll('.notification-area .notification-box').length;
    if (notificationBox !== undefined) {
        if (notificationBoxQtd === 0) {
            (_b = document.querySelector('.notification-area')) === null || _b === void 0 ? void 0 : _b.appendChild(notificationBox);
        }
        var notificationItem_1 = createNotificationItem();
        if (notificationItem_1 !== undefined) {
            (_c = document.querySelector('.notification-area .notification-box')) === null || _c === void 0 ? void 0 : _c.appendChild(notificationItem_1);
            if (notificationItem_1 instanceof HTMLElement) {
                notificationItem_1.classList.add('active');
            }
        }
        setTimeout(function () {
            if (notificationItem_1 !== undefined) {
                hiddenNotificationItem(notificationItem_1);
            }
        }, 2000);
    }
}
function createNotificationItem() {
    var _a;
    var notificationItem = (_a = document.querySelector('.models .notification-item')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
    return notificationItem;
}
function hiddenNotificationItem(notificationItem) {
    var removedNotificationItem = notificationItem;
    var notificationBox = document.querySelector('.notification-area .notification-box');
    if (removedNotificationItem instanceof HTMLElement) {
        removedNotificationItem.classList.remove('active');
    }
    setTimeout(function () {
        notificationBox === null || notificationBox === void 0 ? void 0 : notificationBox.removeChild(removedNotificationItem);
        checkNotificationBox();
    }, 500);
}
function checkNotificationBox() {
    var _a;
    var notificationBox = document.querySelector('.notification-area .notification-box');
    var noticationItemQtd = notificationBox === null || notificationBox === void 0 ? void 0 : notificationBox.querySelectorAll('.notification-item').length;
    if (noticationItemQtd !== undefined && notificationBox !== null) {
        if (noticationItemQtd < 1) {
            (_a = document.querySelector('.notification-area')) === null || _a === void 0 ? void 0 : _a.removeChild(notificationBox);
        }
    }
}
function closeCart() {
    var cartArea = document.querySelector('.cart-area');
    if (cartArea instanceof HTMLElement) {
        cartArea.classList.remove('shown');
    }
}
function updateCart() {
    var cartItemsBox = document.querySelector('.cart-items-box');
    var summaryItems = document.querySelector('.summary-items-qtd');
    var summaryPrice = document.querySelector('.summary-total-price');
    var totalPrice = 0;
    if (cartItemsBox !== null && summaryItems !== null && summaryPrice !== null) {
        cartItemsBox.innerHTML = cart.length.toString();
        if (cart.length > 1) {
            summaryItems.innerHTML = "(".concat(cart.length, " items)");
        }
        else {
            summaryItems.innerHTML = "(".concat(cart.length, " item)");
        }
        var _loop_1 = function (i) {
            var item = sortedMenu.filter(function (item) { return item.id === cart[i].id; })[0];
            totalPrice += ((item.price) * cart[i].qtd);
        };
        for (var i in cart) {
            _loop_1(i);
        }
        summaryPrice.innerHTML = "$ ".concat(totalPrice.toFixed(2));
    }
    if (cart.length > 0) {
        var cartContentTop = document.querySelector('.cart-content .cart-content-top');
        var cartItemElement = document.querySelector('.models .cart-item');
        if (cartContentTop instanceof HTMLElement && cartItemElement instanceof HTMLElement) {
            cartContentTop.innerHTML = '';
            var _loop_2 = function (i) {
                var itemId = cart[i].id;
                var itemQtd = cart[i].qtd;
                var item = sortedMenu.filter(function (item) { return item.id === itemId; })[0];
                var cartImg = cartItemElement.querySelector('.cart-item-img img');
                var cartTitle = cartItemElement.querySelector('.cart-item-info-title');
                var cartQtd = cartItemElement.querySelector('.qtd-display');
                var cartPrice = cartItemElement.querySelector('.cart-item-pricinping-price');
                if (cartImg !== null && cartTitle !== null && cartQtd !== null && cartPrice !== null) {
                    cartItemElement.setAttribute('data-order', i);
                    cartImg.setAttribute('src', "assets/images/".concat(item.img));
                    cartTitle.innerHTML = item.title;
                    cartQtd.innerHTML = itemQtd.toString();
                    cartPrice.innerHTML = "$ ".concat((itemQtd * item.price).toFixed(2));
                }
                var cartItem = cartItemElement.cloneNode(true);
                cartContentTop.appendChild(cartItem);
            };
            for (var i in cart) {
                _loop_2(i);
            }
        }
        addEvents();
    }
    else {
        closeCart();
    }
}
function addEvents() {
    document.querySelectorAll(".cart-area .cart-item .qtd-button").forEach(function (item) {
        item.addEventListener('click', function (e) { return qtdEvent(e); });
    });
    document.querySelectorAll('.cart-area .cart-item .cart-item-info-button').forEach(function (item) {
        item.addEventListener('click', function (e) { return removeCartItem(e); });
    });
}
function qtdEvent(e) {
    var _a;
    if (e.target instanceof Element) {
        var cartItem = e.target.closest('.cart-item');
        var cartItemOrder = cartItem === null || cartItem === void 0 ? void 0 : cartItem.getAttribute('data-order');
        var qtdAction = (_a = e.target.closest('.qtd-button')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-qtd');
        if (cartItem !== null && cartItemOrder !== null && cartItemOrder !== undefined) {
            var pressedCartItem = cart[parseInt(cartItemOrder)];
            if (qtdAction === '+') {
                pressedCartItem.qtd++;
                updateCart();
            }
            else {
                if (pressedCartItem.qtd > 1) {
                    pressedCartItem.qtd--;
                }
                else {
                    cart.splice(parseInt(cartItemOrder), 1);
                }
                updateCart();
            }
        }
    }
}
function removeCartItem(e) {
    if (e.target instanceof Element) {
        var cartItem = e.target.closest('.cart-item');
        var cartItemOrder = cartItem === null || cartItem === void 0 ? void 0 : cartItem.getAttribute('data-order');
        if (cartItemOrder !== null && cartItemOrder !== undefined) {
            cart.splice(parseInt(cartItemOrder), 1);
            updateCart();
        }
    }
}
function menuAction() {
    var menuBox = document.querySelector('.menu-box');
    if (menuBox instanceof HTMLElement) {
        var menuDisplayStatus = window.getComputedStyle(menuBox).display;
        if (menuDisplayStatus === 'none') {
            menuBox.style.display = 'flex';
        }
        else {
            menuBox.style.display = 'none';
        }
    }
}
