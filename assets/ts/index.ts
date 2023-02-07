//INITIAL DATA
let filter: string = 'All';
let sortedMenu = fakeRequisition();
let onLoadFilter: boolean = false;
let cart: {id: number, qtd: number}[] = [];
generateCards();


//EVENTS
window.addEventListener('scroll', displayBackTop);
document.querySelector('.backTop-buttom-box')?.addEventListener('click', backToTop);
document.querySelectorAll('.filter-card').forEach((item) => {
    item.addEventListener('click', (e) => filterClick(e));
});
document.querySelector('.cart-box')?.addEventListener('click', openCart);
document.querySelector('.cart-header')?.addEventListener('click', closeCart);
document.querySelector('.menu-mobile-box')?.addEventListener('click', menuAction);


//FUNCTIONS
function displayBackTop() {
    if(window.scrollY === 0) {
        document.querySelector('.backTop-buttom-box')?.classList.remove('visible');
    } else {
        document.querySelector('.backTop-buttom-box')?.classList.add('visible');
    }
}

function backToTop() {
    window.scrollTo(0, 0);
}

function fakeRequisition() {
    
    const menu: {id: number, title: string, type: string, price: number, img: string}[] = [
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
    ]
    
    
    return menu.sort((item1, item2) => (item1.title < item2.title) ? -1 : 1);
}

function generateCards() {

    for(let i in sortedMenu) {
        
        let cardElement: Element | null = document.querySelector('.item-card');
     
    
        if (cardElement !== null) {
            let cardImg: Element | null = cardElement.querySelector('.card-img-box img');
            let cardTitle: Element | null = cardElement.querySelector('.card-title');
            let cardPrice: Element | null = cardElement.querySelector('.card-price');
            let cardButton: Element | null = cardElement.querySelector('.card-button');

            cardElement.setAttribute('data-item', sortedMenu[i].id.toString());
            cardElement.setAttribute('data-type', sortedMenu[i].type);
            if(cardImg !== null && cardTitle !== null && cardPrice !== null && cardButton !== null) {
                cardImg.setAttribute('src', `assets/images/${sortedMenu[i].img}`);
                cardTitle.innerHTML = sortedMenu[i].title;
                cardPrice.innerHTML = `$ ${sortedMenu[i].price.toString()}`;
            }

            let card: Node = cardElement.cloneNode(true);

            document.querySelector('.items-box')?.appendChild(card);
        }
    }
    addClickEvent();

}

function filterClick(e: Event) {
    if(e.target instanceof Element) {
        let filterCard = e.target.closest('.filter-card');
        
        if(filterCard !== null && onLoadFilter === false) {

            if(!filterCard.classList.contains('selected')) {
                document.querySelectorAll('.filter-card').forEach((item) => {
                    item.classList.remove('selected');
                })
                let filterCardData = filterCard.getAttribute('data-filter');
                if(filterCardData !== null) {
                    filter = filterCardData;
                }
                filterCard.classList.add('selected');
                filterItems(filter);
            }
        }
    }
}

function filterItems(filter: string) {
    let itemsBox = document.querySelector('.items-box');
    if(itemsBox instanceof HTMLElement) {
        itemsBox.style.opacity = '0';
        onLoadFilter = true;
        toggleLoader('flex');
    }
    
    document.querySelectorAll('.items-box .item-card').forEach((item) => {
        if(item instanceof HTMLElement) {
            item.style.display = 'none';
        }
    });

    if(filter !== 'All') {
        document.querySelectorAll('.items-box .item-card').forEach((item) => {
            if(item instanceof HTMLElement && item.getAttribute('data-type') === filter) {
                item.style.display = 'flex';
            }
        });
    } else {
        document.querySelectorAll('.items-box .item-card').forEach((item) => {
            if(item instanceof HTMLElement) {
                item.style.display = 'flex';
            }
        });
    }

    setTimeout(() => {
        if(itemsBox instanceof HTMLElement) {
            itemsBox.style.opacity = '1';
            onLoadFilter = false;
            toggleLoader('none');
        }
    }, 2000);

}

function toggleLoader(display: string) {
    let itemsLoader = document.querySelector('.items-loader');

    if(itemsLoader instanceof HTMLElement) {
        itemsLoader.style.display = display;  
    }
}

function addClickEvent() {
    document.querySelectorAll('.items-box .card-button').forEach((item) => {
        item.addEventListener('click', (e) => handleAddCartButton(e));
    });
}

function handleAddCartButton(e: Event) {
    if(e.target instanceof Element) {
        let itemCard = e.target.closest('.item-card');
        
        if(itemCard !== null){
            let itemIdString = itemCard.getAttribute('data-item');
            if(itemIdString !== null) {
                let itemId = parseInt(itemIdString);

                let existingItem = cart.filter(element => element.id === itemId); 
                
                if(existingItem.length === 0) {
                    cart.push(
                        {
                            id: itemId,
                            qtd: 1
                        }  
                    );
                } else {
                    existingItem[0].qtd += 1;
                }
            }
        }
        
    }
    displayNotification();
    updateCart();
}

function openCart() {
    let cartArea = document.querySelector('.cart-area');
    if(cartArea instanceof HTMLElement) {
        if(cart.length > 0) {
            cartArea.classList.add('shown');
        } else {
            cartArea.classList.remove('shown');
        }
    } 
}

function displayNotification() {
    let notificationBox = document.querySelector('.models .notification-box')?.cloneNode(true);
    let notificationBoxQtd = document.querySelectorAll('.notification-area .notification-box').length;

    if(notificationBox !== undefined) {
        if(notificationBoxQtd === 0) {
            document.querySelector('.notification-area')?.appendChild(notificationBox);
        }

        let notificationItem = createNotificationItem();
        if(notificationItem !== undefined) {
            document.querySelector('.notification-area .notification-box')?.appendChild(notificationItem);
            if(notificationItem instanceof HTMLElement) {
                notificationItem.classList.add('active');
            }
        }
        setTimeout(() => {
            if(notificationItem !== undefined) {
                hiddenNotificationItem(notificationItem);
            }
        }, 2000);
    } 
}

function createNotificationItem() {
    let notificationItem = document.querySelector('.models .notification-item')?.cloneNode(true);
    return notificationItem;
}

function hiddenNotificationItem(notificationItem: Node) {
    let removedNotificationItem = notificationItem;
    let notificationBox = document.querySelector('.notification-area .notification-box');

    if(removedNotificationItem instanceof HTMLElement) {

        removedNotificationItem.classList.remove('active');
    }

    setTimeout(() => {
        notificationBox?.removeChild(removedNotificationItem);
        checkNotificationBox();
    }, 500);
}

function checkNotificationBox() {
    let notificationBox = document.querySelector('.notification-area .notification-box');
    let noticationItemQtd = notificationBox?.querySelectorAll('.notification-item').length;

    if(noticationItemQtd !== undefined && notificationBox !== null) {
        if(noticationItemQtd < 1) {
            document.querySelector('.notification-area')?.removeChild(notificationBox);
        }
    }
}

function closeCart() {
    let cartArea = document.querySelector('.cart-area');
    if(cartArea instanceof HTMLElement) {
        cartArea.classList.remove('shown');   
    }
}

function updateCart() {
    let cartItemsBox = document.querySelector('.cart-items-box');
    let summaryItems = document.querySelector('.summary-items-qtd');
    let summaryPrice = document.querySelector('.summary-total-price');
    let totalPrice: number = 0;

    if(cartItemsBox !== null && summaryItems !== null && summaryPrice !== null) {
        cartItemsBox.innerHTML = cart.length.toString();

        if(cart.length > 1) {
            summaryItems.innerHTML = `(${cart.length} items)`;
        } else {
            summaryItems.innerHTML = `(${cart.length} item)`;
        }

        for(let i in cart) {
            let item = sortedMenu.filter((item) => item.id === cart[i].id)[0];
            totalPrice += ((item.price) * cart[i].qtd);
        }

        summaryPrice.innerHTML = `$ ${totalPrice.toFixed(2)}`;

    }
    
    if(cart.length > 0) {

        let cartContentTop = document.querySelector('.cart-content .cart-content-top');
        let cartItemElement = document.querySelector('.models .cart-item');

        if(cartContentTop instanceof HTMLElement && cartItemElement instanceof HTMLElement) {
            cartContentTop.innerHTML = '';
            
            for(let i in cart) {
                let itemId = cart[i].id;
                let itemQtd = cart[i].qtd;
                let item = sortedMenu.filter((item) => item.id === itemId)[0];
                let cartImg = cartItemElement.querySelector('.cart-item-img img');
                let cartTitle = cartItemElement.querySelector('.cart-item-info-title');
                let cartQtd = cartItemElement.querySelector('.qtd-display');
                let cartPrice = cartItemElement.querySelector('.cart-item-pricinping-price');

                if(cartImg !== null && cartTitle !== null && cartQtd !== null && cartPrice !== null) {
                    cartItemElement.setAttribute('data-order', i);
                    cartImg.setAttribute('src', `assets/images/${item.img}`);
                    cartTitle.innerHTML = item.title;
                    cartQtd.innerHTML = itemQtd.toString();
                    cartPrice.innerHTML = `$ ${(itemQtd * item.price).toFixed(2)}`;
                }

                let cartItem = cartItemElement.cloneNode(true);
                cartContentTop.appendChild(cartItem);
            } 
        }

        addEvents();
    } else {
        closeCart();
    }
}

function addEvents() {
    document.querySelectorAll(".cart-area .cart-item .qtd-button").forEach((item) => {
        item.addEventListener('click', (e) => qtdEvent(e));
    });
    document.querySelectorAll('.cart-area .cart-item .cart-item-info-button').forEach((item) => {
        item.addEventListener('click', (e) => removeCartItem(e));
    })
}

function qtdEvent(e: Event) {
    if(e.target instanceof Element) {
        let cartItem = e.target.closest('.cart-item');
        let cartItemOrder = cartItem?.getAttribute('data-order');
        let qtdAction = e.target.closest('.qtd-button')?.getAttribute('data-qtd');

        if(cartItem !== null && cartItemOrder !== null  && cartItemOrder !== undefined) {
            
           let pressedCartItem = cart[parseInt(cartItemOrder)];
            
            if(qtdAction === '+') {
                pressedCartItem.qtd++;
                updateCart();
            } else {
                if(pressedCartItem.qtd > 1) {
                    pressedCartItem.qtd--;
                } else {
                    cart.splice(parseInt(cartItemOrder), 1);
                }
                updateCart();
            }

        }
    }
}

function removeCartItem(e: Event) {
    if(e.target instanceof Element) {
        let cartItem = e.target.closest('.cart-item');
        let cartItemOrder = cartItem?.getAttribute('data-order');

        if(cartItemOrder !== null && cartItemOrder !== undefined) {
            cart.splice(parseInt(cartItemOrder), 1);
            updateCart();
        }
    }
}

function menuAction() {
    let menuBox = document.querySelector('.menu-box');
    if(menuBox instanceof HTMLElement) {
        let menuDisplayStatus = window.getComputedStyle(menuBox).display;
       
        if(menuDisplayStatus === 'none') {
            menuBox.style.display = 'flex';
        } else {
            menuBox.style.display = 'none';
        }
    }
    
}