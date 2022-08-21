export interface MenuElement {
    wording: string;
    path: string;
    icon: string;
}

export const AdminMenuElement: MenuElement[] = [
    { wording: "Commandes", path: "admin/liste-commandes", icon: "list" },
    { wording: "Production", path: "admin/recap-production", icon: "supervisor_account" },
    { wording: "Produits", path: "admin/produits", icon: "fastfood" },
    { wording: "Jours fermés", path: "admin/gestion-fermeture", icon: "event_busy" },
    { wording: "Récap mensuel", path: "admin/recap-global-mensuel", icon: "checklist_rtl" },

];

export const UserMenuElement: MenuElement[] = [
    { wording: "Formulaire", path: "/", icon: "shopping_basket" },
    { wording: "Mes infos", path: "compte/infos", icon: "account_circle" },
    { wording: "Mes commandes", path: "compte/mes-commandes", icon: "list" },
    // { wording: "Récap du mois dernier", path: "compte/recap", icon: "checklist_rtl" },
];