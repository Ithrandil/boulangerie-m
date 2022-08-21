import { Order, OrderProduct } from '@models/order';

export function mapOrderListToOrderProductList(ordersList: Order[]): OrderProduct[] {
    let tmpOrderArray: OrderProduct[] = [];
    const finalArray: OrderProduct[] = [];
    ordersList.forEach((order) => {
        tmpOrderArray = [...tmpOrderArray, ...order.order];
    });
    tmpOrderArray.forEach((product) => {
        const oneProductArray = tmpOrderArray.filter(
            (el) => el.product === product.product
        );
        oneProductArray.forEach((uniqueProductOrder) => {
            if (uniqueProductOrder.comment) {
                finalArray.push(uniqueProductOrder);
            } else if (uniqueProductOrder.isSliced) {
                const indexFinalArraySlicedProduct = finalArray.findIndex(
                    (el) =>
                        el.product === uniqueProductOrder.product &&
                        !el.comment &&
                        el.isSliced
                );
                if (indexFinalArraySlicedProduct >= 0) {
                    finalArray[indexFinalArraySlicedProduct].quantity +=
                        uniqueProductOrder.quantity;
                } else {
                    finalArray.push(uniqueProductOrder);
                }
            } else {
                const indexFinalArrayProduct = finalArray.findIndex(
                    (el) =>
                        el.product === uniqueProductOrder.product &&
                        !el.comment &&
                        !el.isSliced
                );
                if (indexFinalArrayProduct >= 0) {
                    finalArray[indexFinalArrayProduct].quantity +=
                        uniqueProductOrder.quantity;
                } else {
                    finalArray.push(uniqueProductOrder);
                }
            }
        });
        tmpOrderArray = tmpOrderArray.filter(
            (el) => el.product !== product.product
        );
    });

    finalArray.forEach(product => product.quantity = +product.quantity.toFixed(2))
    return finalArray.sort((a, b) =>
        a.product < b.product ? -1 : a.product > b.product ? 1 : 0
    );
}