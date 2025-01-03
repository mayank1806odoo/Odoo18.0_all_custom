/** @odoo-module */

import { PosStore } from "@point_of_sale/app/store/pos_store";
import { patch } from "@web/core/utils/patch";
import { makeAwaitable } from "@point_of_sale/app/store/make_awaitable_dialog";
import { PosBagPopup } from "@pos_bag_charges/js/PosBagPopupWidget";
import { _t } from "@web/core/l10n/translation";

patch(PosStore.prototype, {
    async onclick_bag() {
        let self = this;
        let selectedOrder = self.get_order();
        let category = self.config.bag_category_id;
        if(category){
            let products = this.models["product.product"].getBy("pos_categ_ids", category.id);
            if(products){
                if (products.length == 1) { 
                    self.env.services.pos.addLineToCurrentOrder({
                        product_id : products[0],
                        tax_ids: [["link", ...products[0].taxes_id]]
                    })
                    self.env.services.pos.set_order(selectedOrder);
                    self.env.services.pos.showScreen('ProductScreen');
                }else{
                    products.forEach(function(prd) {
                        prd['image_url'] = window.location.origin + '/web/binary/image?model=product.product&field=image_medium&id=' + prd.id;
                    });
                    await makeAwaitable(self.dialog, PosBagPopup, {'products': products});
                }   
            }
            else if(!products){
                self.notification.add(_t("Currently Product Bag Not available !!!"), { type: "danger" });
            }
        }
    }
});

