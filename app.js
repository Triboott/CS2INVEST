// LÓGICA DE APLICACIÓN - CS2INVEST (INVESTMENT TRACKER)

document.addEventListener('DOMContentLoaded', () => {
    // 1. DICCIONARIO DE TRADUCCIONES (EN / ES) - POR DEFECTO EN INGLÉS
    const translations = {
        en: {
            app_subtitle: "INVESTMENT TRACKER",
            login_desc: "Synchronize your investments securely in the cloud and access your portfolio from any device without losing your data.",
            btn_login_google: "Sign in with Google",
            db_config_toggle_text: "Database Setup (Firebase)",
            fb_config_desc: "Paste your Firebase project credentials below to enable cloud synchronization.",
            btn_connect_cloud: "Connect Cloud",
            btn_disconnect_cloud: "Disconnect Settings",
            login_status_ready: "SYSTEM READY",
            login_status_connecting: "CONNECTING TO FIREBASE CLOUD...",
            login_status_downloading: "RETRIEVING CLOUD PORTFOLIO...",
            login_status_auth_required: "AUTHENTICATION REQUIRED",
            login_status_auth_failed: "AUTHENTICATION FAILED",
            
            // Dashboard
            metric_total_invested: "TOTAL INVESTED",
            metric_total_sales: "TOTAL SALES / RETURN",
            metric_net_balance: "NET BALANCE",
            metric_portfolio_assets: "PORTFOLIO ASSETS",
            sub_items_purchased: "{qty} items purchased",
            sub_item_purchased: "{qty} item purchased",
            sub_items_sold: "{qty} units sold",
            sub_item_sold: "{qty} unit sold",
            sub_items_active: "{qty} active items",
            sub_item_active: "{qty} active item",
            sub_roi_closed: "Closed ROI: {roi}%",

            // Form
            form_title: "REGISTER INVESTMENT",
            form_item_name: "Item Name",
            form_category: "Category",
            form_quantity: "Quantity",
            form_unit_price: "Unit Purchase Price",
            form_purchase_date: "Purchase Date",
            form_notes: "Additional Notes (Optional)",
            btn_add_portfolio: "Add to Portfolio",
            btn_save_changes: "Save Changes",
            btn_cancel: "Cancel",

            // Categories
            cat_case: "Case",
            cat_skin: "Skin",
            cat_sticker: "Sticker",
            cat_capsule: "Capsule",
            cat_agent: "Agent",
            cat_other: "Other",

            // Backup Panel
            backup_title: "MANAGE DATA",
            btn_export_json: "Export JSON",
            btn_import_json: "Import JSON",
            btn_clear_all: "Clear All Data",

            // Tabs
            tab_distribution: "Capital Distribution",
            tab_performance: "Sales Performance",
            empty_chart_dist: "Add investments to view your capital distribution.",
            empty_chart_perf: "Register sales to view your performance comparison.",

            // Table
            table_title: "INVESTMENT PORTFOLIO",
            search_placeholder: "Search by item...",
            filter_cat_all: "All Categories",
            filter_cat_cases: "Cases",
            filter_cat_skins: "Skins",
            filter_cat_stickers: "Stickers",
            filter_cat_capsules: "Capsules",
            filter_cat_agents: "Agents",
            filter_cat_others: "Others",
            filter_status_all: "All Statuses",
            filter_status_active: "Active (In Portfolio)",
            filter_status_sold: "Sold",

            th_item: "Item",
            th_category: "Category",
            th_qty: "Qty",
            th_buy_price: "Unit Buy Price",
            th_total_invested: "Total Invested",
            th_sell_price: "Unit Sell Price",
            th_total_return: "Total Return",
            th_profit_loss: "Profit / Loss",
            th_actions: "Actions",

            empty_table_title: "No transactions registered",
            empty_table_desc: "Use the form above to add your first CS2 investment.",

            // Sale Modal
            modal_title: "Register Sale",
            modal_desc: "Register the sale of your item to calculate your final net profit or loss.",
            modal_qty_to_sell: "Quantity to Sell",
            modal_unit_sell_price: "Unit Sell Price",
            modal_original_cost: "Original Purchase Cost:",
            modal_expected_return: "Expected Sale Return:",
            modal_estimated_result: "Estimated Net Result:",
            btn_confirm_sale: "Confirm Sale",

            // Toasts & Messages
            toast_connect_success: "Firebase connected. Reloading application...",
            toast_disconnect_success: "Disconnected from Firebase. Settings cleared.",
            toast_fill_all_fields: "Please fill in all database fields.",
            toast_invalid_keys: "Failed to initialize Firebase. Verify your credentials.",
            toast_added_success: "Item added to portfolio successfully.",
            toast_updated_success: "Investment updated successfully.",
            toast_deleted_success: "Investment removed from portfolio.",
            toast_sale_registered: "Sale registered successfully.",
            toast_partial_sale: "Partial sale of {qty} units registered successfully.",
            toast_no_data_export: "No data available to export.",
            toast_backup_exported: "Backup exported successfully.",
            toast_import_success: "Portfolio imported successfully.",
            toast_import_invalid: "Invalid JSON backup file.",
            toast_import_error: "Error reading JSON backup file.",
            toast_clear_all_confirm: "WARNING! You are about to wipe your entire investment history. This cannot be undone. Do you wish to continue?",
            toast_clear_all_success: "All data cleared successfully.",
            toast_delete_confirm: "Are you sure you want to delete \"{name}\" from your portfolio?",
            toast_logout_confirm: "Are you sure you want to sign out? Your investments will remain securely stored in the cloud.",
            toast_logout_success: "Signed out successfully.",
            toast_sync_cloud: "Synchronizing with cloud database...",
            toast_migrate_success: "Migrated your local investments to your cloud account!",
            toast_firebase_error: "Cloud synchronization error.",
            toast_google_auth_failed: "Failed to authenticate with Google.",
            toast_fb_not_configured: "Please set up your Firebase credentials in the setup panel first.",
            
            // General
            db_status_local: "LOCAL DB",
            db_status_cloud: "CLOUD SYNC",
            available: "Available",
            sold_partial: "(Partial sale)",
            chart_buy_label: "Purchase Investment",
            chart_sell_label: "Sale Return"
        },
        es: {
            app_subtitle: "GESTOR DE INVERSIONES",
            login_desc: "Sincroniza tus inversiones en la nube de forma segura y accede a tu inventario desde cualquier dispositivo sin perder tus datos.",
            btn_login_google: "Iniciar Sesión con Google",
            db_config_toggle_text: "Configuración Base de Datos (Firebase)",
            fb_config_desc: "Introduce las credenciales de tu proyecto de Firebase para sincronizar en la nube.",
            btn_connect_cloud: "Conectar Cloud",
            btn_disconnect_cloud: "Desconectar Claves",
            login_status_ready: "SISTEMA LISTO",
            login_status_connecting: "CONECTANDO A FIREBASE CLOUD...",
            login_status_downloading: "DESCARGANDO PORTAFOLIO CLOUD...",
            login_status_auth_required: "AUTENTICACIÓN REQUERIDA",
            login_status_auth_failed: "FALLO EN EL LOGUEO",

            // Dashboard
            metric_total_invested: "INVERSIÓN TOTAL",
            metric_total_sales: "VENTAS / RETORNADO",
            metric_net_balance: "BALANCE NETO",
            metric_portfolio_assets: "ACTIVOS EN PORTAFOLIO",
            sub_items_purchased: "{qty} artículos comprados",
            sub_item_purchased: "{qty} artículo comprado",
            sub_items_sold: "{qty} unidades vendidas",
            sub_item_sold: "{qty} unidad vendida",
            sub_items_active: "{qty} unidades en cartera",
            sub_item_active: "{qty} unidad en cartera",
            sub_roi_closed: "ROI Cerrado: {roi}%",

            // Form
            form_title: "REGISTRAR INVERSIÓN",
            form_item_name: "Nombre del Artículo",
            form_category: "Categoría",
            form_quantity: "Cantidad",
            form_unit_price: "P. Unitario Compra",
            form_purchase_date: "Fecha Compra",
            form_notes: "Notas Adicionales (Opcional)",
            btn_add_portfolio: "Agregar al Portafolio",
            btn_save_changes: "Guardar Cambios",
            btn_cancel: "Cancelar",

            // Categories
            cat_case: "Caja",
            cat_skin: "Skin",
            cat_sticker: "Pegatina",
            cat_capsule: "Cápsula",
            cat_agent: "Agente",
            cat_other: "Otro",

            // Backup Panel
            backup_title: "ADMINISTRAR DATOS",
            btn_export_json: "Exportar JSON",
            btn_import_json: "Importar JSON",
            btn_clear_all: "Borrar Todo",

            // Tabs
            tab_distribution: "Distribución de Capital",
            tab_performance: "Rendimiento de Venta",
            empty_chart_dist: "Agrega inversiones para ver la distribución de tu capital.",
            empty_chart_perf: "Registra ventas para ver el comparativo de rendimiento.",

            // Table
            table_title: "CARTERA DE INVERSIONES",
            search_placeholder: "Buscar por artículo...",
            filter_cat_all: "Todas las Categorías",
            filter_cat_cases: "Cajas",
            filter_cat_skins: "Skins",
            filter_cat_stickers: "Pegatinas",
            filter_cat_capsules: "Cápsulas",
            filter_cat_agents: "Agentes",
            filter_cat_others: "Otros",
            filter_status_all: "Todos los Estados",
            filter_status_active: "Activos (En Cartera)",
            filter_status_sold: "Vendidos",

            th_item: "Artículo",
            th_category: "Categoría",
            th_qty: "Cant.",
            th_buy_price: "P. Unitario Compra",
            th_total_invested: "Total Invertido",
            th_sell_price: "P. Unitario Venta",
            th_total_return: "Retorno Total",
            th_profit_loss: "Ganancia / Pérdida",
            th_actions: "Acciones",

            empty_table_title: "No hay transacciones registradas",
            empty_table_desc: "Usa el formulario superior para añadir tu primera inversión en CS2.",

            // Sale Modal
            modal_title: "Registrar Venta",
            modal_desc: "Vas a registrar la venta de tu artículo para calcular tu ganancia o pérdida final.",
            modal_qty_to_sell: "Cantidad a Vender",
            modal_unit_sell_price: "P. Unitario de Venta",
            modal_original_cost: "Coste de Compra Original:",
            modal_expected_return: "Retorno Esperado de la Venta:",
            modal_estimated_result: "Resultado Neto Estimado:",
            btn_confirm_sale: "Confirmar Venta",

            // Toasts & Messages
            toast_connect_success: "Firebase conectado. Recargando aplicación...",
            toast_disconnect_success: "Desconectado de Firebase. Claves eliminadas.",
            toast_fill_all_fields: "Por favor, rellena todos los campos.",
            toast_invalid_keys: "Error al inicializar Firebase. Comprueba tus credenciales.",
            toast_added_success: "Artículo agregado al portafolio.",
            toast_updated_success: "Inversión actualizada correctamente.",
            toast_deleted_success: "Registro eliminado.",
            toast_sale_registered: "Venta registrada con éxito.",
            toast_partial_sale: "Venta parcial de {qty} unidades registrada con éxito.",
            toast_no_data_export: "No hay datos para exportar.",
            toast_backup_exported: "Copia de seguridad exportada correctamente.",
            toast_import_success: "Portafolio importado con éxito.",
            toast_import_invalid: "El archivo JSON no tiene un formato compatible válido.",
            toast_import_error: "Error al leer el archivo JSON.",
            toast_clear_all_confirm: "¡ATENCIÓN! Estás a punto de borrar absolutamente todo tu historial de inversiones. Esta acción no se puede deshacer. ¿Deseas continuar?",
            toast_clear_all_success: "Historial borrado por completo.",
            toast_delete_confirm: "¿Estás seguro de que deseas eliminar \"{name}\" del portafolio?",
            toast_logout_confirm: "¿Deseas cerrar tu sesión de Google? Tus inversiones seguirán guardadas de forma segura en la nube.",
            toast_logout_success: "Sesión cerrada correctamente.",
            toast_sync_cloud: "Sincronizando con base de datos en la nube...",
            toast_migrate_success: "¡Se ha migrado tu portafolio local a tu cuenta en la nube!",
            toast_firebase_error: "Error de sincronización en la nube.",
            toast_google_auth_failed: "Error al iniciar sesión con Google.",
            toast_fb_not_configured: "Por favor, configura tus credenciales de Firebase primero en la pantalla de acceso.",
            
            // General
            db_status_local: "B.D. LOCAL",
            db_status_cloud: "NUBE SINC.",
            available: "Disponible",
            sold_partial: "(Venta parcial)",
            chart_buy_label: "Inversión Compra",
            chart_sell_label: "Retorno Venta"
        }
    };

    // 2. VARIABLES DE ESTADO E INTERNACIONALIZACIÓN
    let currentLang = localStorage.getItem('cs2_pref_lang') || 'en';
    let transactions = [];
    let distributionChart = null;
    let performanceChart = null;

    // Firebase References
    let fbApp = null;
    let fbAuth = null;
    let fbDb = null;
    let isCloudConnected = false;
    let currentUser = null;

    // Elementos DOM del Formulario de Inversión
    const investmentForm = document.getElementById('investment-form');
    const editIdInput = document.getElementById('edit-id');
    const itemNameInput = document.getElementById('item-name');
    const itemCategoryInput = document.getElementById('item-category');
    const itemQtyInput = document.getElementById('item-qty');
    const itemPriceInput = document.getElementById('item-price');
    const itemDateInput = document.getElementById('item-date');
    const itemNotesInput = document.getElementById('item-notes');
    const btnSubmit = document.getElementById('btn-submit');
    const btnCancel = document.getElementById('btn-cancel');
    const submitBtnText = document.getElementById('submit-btn-text');

    // Elementos Dashboard
    const metricTotalInvested = document.getElementById('metric-total-invested');
    const metricTotalItemsCount = document.getElementById('metric-total-items-count');
    const metricTotalRevenue = document.getElementById('metric-total-revenue');
    const metricSoldItemsCount = document.getElementById('metric-sold-items-count');
    const metricNetProfit = document.getElementById('metric-net-profit');
    const metricProfitPercentage = document.getElementById('metric-profit-percentage');
    const profitMetricCard = document.getElementById('profit-metric-card');
    const profitMetricIcon = document.getElementById('profit-metric-icon');
    const metricActiveValue = document.getElementById('metric-active-value');
    const metricActiveItemsCount = document.getElementById('metric-active-items-count');

    // Elementos Tabla & Filtros
    const investmentsList = document.getElementById('investments-list');
    const tableEmptyState = document.getElementById('table-empty-state');
    const searchInput = document.getElementById('search-input');
    const filterCategory = document.getElementById('filter-category');
    const filterStatus = document.getElementById('filter-status');

    // Elementos Backup & Administración General
    const btnExport = document.getElementById('btn-export');
    const btnImportTrigger = document.getElementById('btn-import-trigger');
    const importFileInput = document.getElementById('import-file');
    const btnClear = document.getElementById('btn-clear');

    // Elementos Gráficos y Tabs
    const tabTitles = document.querySelectorAll('.tab-title');
    const chartContainers = document.querySelectorAll('.chart-container');
    const distEmpty = document.getElementById('dist-empty');
    const perfEmpty = document.getElementById('perf-empty');

    // Elementos Modal Venta
    const saleModal = document.getElementById('sale-modal');
    const saleForm = document.getElementById('sale-form');
    const saleItemIdInput = document.getElementById('sale-item-id');
    const saleQtyInput = document.getElementById('sale-qty');
    const saleQtyMax = document.getElementById('sale-qty-max');
    const salePriceInput = document.getElementById('sale-price');
    const modalItemBadge = document.getElementById('modal-item-badge');
    const modalItemName = document.getElementById('modal-item-name');
    const modalCalcCost = document.getElementById('modal-calc-cost');
    const modalCalcRevenue = document.getElementById('modal-calc-revenue');
    const modalCalcProfit = document.getElementById('modal-calc-profit');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnCancelSale = document.getElementById('btn-cancel-sale');

    // Contenedor Toasts
    const toastContainer = document.getElementById('toast-container');

    // Elementos Perfil Cabecera
    const googleProfileContainer = document.getElementById('google-profile-container');
    const googleUserProfile = document.getElementById('google-user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const userDisplayName = document.getElementById('user-display-name');
    const userEmailText = document.getElementById('user-email-text');
    const btnLogout = document.getElementById('btn-logout');
    const dbStatusBadge = document.getElementById('db-status-badge');

    // Selectores de Idioma DOM
    const loginLangSelect = document.getElementById('login-lang-select');
    const headerLangSelect = document.getElementById('header-lang-select');

    // Elementos Firebase Config en Login Wall
    const dbConfigToggle = document.getElementById('db-config-toggle');
    const configArrow = document.getElementById('config-arrow');
    const dbConfigContent = document.getElementById('db-config-content');
    const fbApiKeyInput = document.getElementById('fb-api-key');
    const fbAuthDomainInput = document.getElementById('fb-auth-domain');
    const fbProjectIdInput = document.getElementById('fb-project-id');
    const fbAppIdInput = document.getElementById('fb-app-id');
    const btnSaveFirebase = document.getElementById('btn-save-firebase');
    const btnDisconnectFirebase = document.getElementById('btn-disconnect-firebase');
    const fbConnectionStatus = document.getElementById('fb-connection-status');

    // Elementos Pantalla de Bloqueo (Login Wall)
    const loginWall = document.getElementById('login-wall');
    const appContent = document.getElementById('app-content');
    const btnLoginGoogleReal = document.getElementById('btn-login-google-real');
    const loginStatusText = document.getElementById('login-status-text');

    // Establecer fecha por defecto (hoy)
    const today = new Date().toISOString().split('T')[0];
    itemDateInput.value = today;

    // 3. INICIALIZAR Y CARGAR DATOS
    function init() {
        // Inicializar Idioma
        loginLangSelect.value = currentLang;
        headerLangSelect.value = currentLang;
        updateLanguageUI();

        // Registrar Eventos de Cambio de Idioma
        loginLangSelect.addEventListener('change', (e) => handleLanguageChange(e.target.value));
        headerLangSelect.addEventListener('change', (e) => handleLanguageChange(e.target.value));

        // Registro de toggle desplegable Firebase en Login Card
        dbConfigToggle.addEventListener('click', toggleFirebaseConfigAccordion);

        // Cargar configuración de Firebase si existe
        const fbConfig = loadFirebaseConfig();
        
        if (fbConfig) {
            updateLoginStatusText("login_status_connecting");
            initializeFirebaseReal(fbConfig);
        } else {
            updateLoginStatusText("login_status_auth_required");
            initializeFirebaseNoCloud();
        }

        // Bindeos de la interfaz de login y auth
        btnLoginGoogleReal.addEventListener('click', handleGoogleRealLogin);
        btnLogout.addEventListener('click', handleLogout);

        // Bindeos de administración de Firebase Config
        btnSaveFirebase.addEventListener('click', handleSaveFirebaseConfig);
        btnDisconnectFirebase.addEventListener('click', handleDisconnectFirebase);

        // Iniciar gráficos
        initCharts();
    }

    // 4. MOTOR DE INTERNACIONALIZACIÓN (i18n)
    function handleLanguageChange(lang) {
        currentLang = lang;
        localStorage.setItem('cs2_pref_lang', lang);
        
        // Sincronizar los dos selects
        loginLangSelect.value = lang;
        headerLangSelect.value = lang;

        updateLanguageUI();
        
        // Volver a renderizar app para actualizar formatos/gráficos
        renderApp();
    }

    function updateLanguageUI() {
        const langData = translations[currentLang];
        if (!langData) return;

        // Traducir todos los elementos con atributo data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.textContent = langData[key];
            }
        });

        // Traducir todos los placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                el.placeholder = langData[key];
            }
        });

        // Formulario placeholders especiales
        if (currentLang === 'es') {
            itemNameInput.placeholder = "Ej. Caja de la Operación Riptide";
            itemNotesInput.placeholder = "Ej. Comprado en Steam Market";
        } else {
            itemNameInput.placeholder = "e.g., Operation Riptide Case";
            itemNotesInput.placeholder = "e.g., Steam Market purchase";
        }

        // Traducir botón dinámico de agregar/cambios del formulario
        if (editIdInput.value) {
            submitBtnText.textContent = langData.btn_save_changes;
        } else {
            submitBtnText.textContent = langData.btn_add_portfolio;
        }
    }

    function getTranslation(key, replacements = {}) {
        const langData = translations[currentLang] || translations.en;
        let text = langData[key] || key;
        
        // Reemplazar llaves e.g. {qty}
        Object.keys(replacements).forEach(placeholder => {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        });
        return text;
    }

    // Actualizar texto del login wall según idioma
    function updateLoginStatusText(key) {
        loginStatusText.textContent = getTranslation(key);
    }

    // 5. ACORDEÓN DE CONFIGURACIÓN DE FIREBASE EN LOGIN
    function toggleFirebaseConfigAccordion() {
        dbConfigContent.classList.toggle('hidden');
        configArrow.classList.toggle('active');
    }

    // 6. LÓGICA DE FIREBASE CLOUD
    function loadFirebaseConfig() {
        // Usar las credenciales reales del proyecto del usuario como valores predeterminados
        const apiKey = localStorage.getItem('cs2_fb_apiKey') || 'AIzaSyAt9U3Mf6yfN6ToMdMowTmPsAq-TD9Eg_k';
        const authDomain = localStorage.getItem('cs2_fb_authDomain') || 'cs2invest-triboot.firebaseapp.com';
        const projectId = localStorage.getItem('cs2_fb_projectId') || 'cs2invest-triboot';
        const appId = localStorage.getItem('cs2_fb_appId') || '1:515878673410:web:664391969e769e1608db1b';

        // Rellenar visualmente los campos del configurador para facilitar la gestión
        fbApiKeyInput.value = apiKey;
        fbAuthDomainInput.value = authDomain;
        fbProjectIdInput.value = projectId;
        fbAppIdInput.value = appId;

        return { apiKey, authDomain, projectId, appId };
    }

    function initializeFirebaseReal(config) {
        if (typeof firebase === 'undefined') {
            setTimeout(() => initializeFirebaseReal(config), 500);
            return;
        }

        try {
            // Prevenir errores de doble inicialización (HMR o recargas repetidas)
            if (firebase.apps.length === 0) {
                fbApp = firebase.initializeApp(config);
            } else {
                fbApp = firebase.app();
            }
            fbAuth = firebase.auth();
            fbDb = firebase.firestore();
            isCloudConnected = true;

            fbConnectionStatus.textContent = currentLang === 'es' ? "Conectado" : "Connected";
            fbConnectionStatus.className = "fb-status-label connected";
            btnDisconnectFirebase.classList.remove('hidden');

            // Listener de Autenticación
            fbAuth.onAuthStateChanged(async (user) => {
                if (user) {
                    currentUser = user;
                    const profile = {
                        uid: user.uid,
                        name: user.displayName,
                        email: user.email,
                        picture: user.photoURL
                    };

                    localStorage.setItem('cs2_user_profile', JSON.stringify(profile));
                    
                    // Sincronizar datos desde Firestore
                    updateLoginStatusText("login_status_downloading");
                    await syncFromFirestore(user.uid);

                    // Desbloquear aplicación
                    loginWall.classList.add('hidden');
                    appContent.classList.remove('hidden');

                    renderUserProfile(profile);
                    renderApp();
                    showToast(getTranslation('toast_sync_cloud'), 'success');
                } else {
                    currentUser = null;
                    localStorage.removeItem('cs2_user_profile');
                    
                    // Bloquear aplicación
                    loginWall.classList.remove('hidden');
                    appContent.classList.add('hidden');
                    updateLoginStatusText("login_status_auth_required");

                    renderUserProfile(null);
                }
            });
        } catch (e) {
            console.error("Error al inicializar Firebase:", e);
            showToast(getTranslation('toast_invalid_keys'), "danger");
            initializeFirebaseNoCloud(); // Desconecta el estado de forma segura sin loops de recarga
        }
    }

    function initializeFirebaseNoCloud() {
        isCloudConnected = false;
        fbConnectionStatus.textContent = currentLang === 'es' ? "Sin Conectar" : "Disconnected";
        fbConnectionStatus.className = "fb-status-label";
        btnDisconnectFirebase.classList.add('hidden');

        // Al quitar el modo demo, la app requerirá obligatoriamente que se conecte Firebase.
        // Bloquear aplicación
        loginWall.classList.remove('hidden');
        appContent.classList.add('hidden');
        updateLoginStatusText("login_status_auth_required");
    }

    async function syncFromFirestore(uid) {
        if (!fbDb) return;
        try {
            const docRef = fbDb.collection('users').doc(uid);
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                transactions = data.transactions || [];
                localStorage.setItem('cs2_investments', JSON.stringify(transactions));
            } else {
                // Migrar portafolio local preexistente si es primera vez en la nube
                const localStored = localStorage.getItem('cs2_investments');
                if (localStored) {
                    try {
                        transactions = JSON.parse(localStored);
                        if (transactions.length > 0) {
                            await docRef.set({ transactions });
                            showToast(getTranslation('toast_migrate_success'), 'success');
                        }
                    } catch (e) {
                        transactions = [];
                    }
                } else {
                    transactions = [];
                }
            }
        } catch (e) {
            console.error("Error al sincronizar desde Firestore:", e);
            showToast(getTranslation('toast_firebase_error'), "danger");
        }
    }

    function saveData() {
        localStorage.setItem('cs2_investments', JSON.stringify(transactions));

        if (isCloudConnected && currentUser) {
            fbDb.collection('users').doc(currentUser.uid).set({
                transactions: transactions
            }).catch(e => {
                console.error("Error al guardar en la nube:", e);
                showToast(getTranslation('toast_firebase_error'), "danger");
            });
        }
    }

    // 7. INICIOS Y CIERRES DE SESIÓN
    function handleGoogleRealLogin() {
        if (!isCloudConnected) {
            showToast(getTranslation('toast_fb_not_configured'), "danger");
            
            // Expandir panel de configuración de base de datos automáticamente para guiar al usuario
            if (dbConfigContent.classList.contains('hidden')) {
                toggleFirebaseConfigAccordion();
            }
            return;
        }

        updateLoginStatusText("login_status_connecting");
        const provider = new firebase.auth.GoogleAuthProvider();
        
        fbAuth.signInWithPopup(provider).then((result) => {
            // El listener se encarga del resto
        }).catch(err => {
            console.error("Error de login en Firebase:", err);
            updateLoginStatusText("login_status_auth_failed");
            showToast(getTranslation('toast_google_auth_failed'), "danger");
        });
    }

    function handleLogout() {
        if (confirm(getTranslation('toast_logout_confirm'))) {
            if (isCloudConnected && fbAuth) {
                fbAuth.signOut().then(() => {
                    showToast(getTranslation('toast_logout_success'), "info");
                });
            }
        }
    }

    // 8. CONFIGURACIÓN DE CREDENCIALES
    function handleSaveFirebaseConfig() {
        const apiKey = fbApiKeyInput.value.trim();
        const authDomain = fbAuthDomainInput.value.trim();
        const projectId = fbProjectIdInput.value.trim();
        const appId = fbAppIdInput.value.trim();

        if (!apiKey || !authDomain || !projectId || !appId) {
            showToast(getTranslation('toast_fill_all_fields'), "danger");
            return;
        }

        localStorage.setItem('cs2_fb_apiKey', apiKey);
        localStorage.setItem('cs2_fb_authDomain', authDomain);
        localStorage.setItem('cs2_fb_projectId', projectId);
        localStorage.setItem('cs2_fb_appId', appId);

        showToast(getTranslation('toast_connect_success'), "success");

        setTimeout(() => {
            location.reload();
        }, 1500);
    }

    function handleDisconnectFirebase() {
        if (confirm(getTranslation('toast_disconnect_success'))) {
            localStorage.removeItem('cs2_fb_apiKey');
            localStorage.removeItem('cs2_fb_authDomain');
            localStorage.removeItem('cs2_fb_projectId');
            localStorage.removeItem('cs2_fb_appId');
            localStorage.removeItem('cs2_user_profile');
            localStorage.removeItem('cs2_investments'); // Limpiar inversiones locales asociadas por seguridad

            showToast(getTranslation('toast_disconnect_success'), "info");

            setTimeout(() => {
                location.reload();
            }, 1200);
        }
    }

    // 9. ACTUALIZAR INTERFAZ PERFIL USER
    function renderUserProfile(profile) {
        if (profile) {
            userAvatar.src = profile.picture || 'https://lh3.googleusercontent.com/a/default-user=s96-c';
            userDisplayName.textContent = profile.name || 'User';
            userEmailText.textContent = profile.email || '';

            dbStatusBadge.querySelector('.status-text').textContent = getTranslation('db_status_cloud');
            dbStatusBadge.querySelector('.status-indicator').style.backgroundColor = '#4285F4';
            dbStatusBadge.querySelector('.status-indicator').style.boxShadow = '0 0 8px #4285F4';
        }
    }

    // 10. RENDERIZADO DEL DASHBOARD
    function renderApp() {
        renderDashboard();
        renderTable();
        updateCharts();
    }

    function renderDashboard() {
        let totalInvested = 0;
        let totalItemsPurchased = 0;
        let totalRevenue = 0;
        let totalItemsSold = 0;
        let activeValue = 0;
        let totalActiveItems = 0;

        transactions.forEach(t => {
            const qty = parseFloat(t.qty);
            const purchasePrice = parseFloat(t.purchasePrice);
            const cost = qty * purchasePrice;

            totalInvested += cost;
            totalItemsPurchased += qty;

            if (t.status === 'sold') {
                const salePrice = parseFloat(t.salePrice);
                totalRevenue += qty * salePrice;
                totalItemsSold += qty;
            } else {
                activeValue += cost;
                totalActiveItems += qty;
            }
        });

        const netProfit = totalRevenue - (totalInvested - activeValue);
        const closedCost = totalInvested - activeValue;
        const roi = closedCost > 0 ? (netProfit / closedCost) * 100 : 0;

        metricTotalInvested.textContent = formatCurrency(totalInvested);
        
        // Traducir subtítulos
        metricTotalItemsCount.textContent = totalItemsPurchased === 1 
            ? getTranslation('sub_item_purchased', { qty: totalItemsPurchased })
            : getTranslation('sub_items_purchased', { qty: totalItemsPurchased });

        metricTotalRevenue.textContent = formatCurrency(totalRevenue);
        metricSoldItemsCount.textContent = totalItemsSold === 1
            ? getTranslation('sub_item_sold', { qty: totalItemsSold })
            : getTranslation('sub_items_sold', { qty: totalItemsSold });

        metricActiveValue.textContent = formatCurrency(activeValue);
        metricActiveItemsCount.textContent = totalActiveItems === 1
            ? getTranslation('sub_item_active', { qty: totalActiveItems })
            : getTranslation('sub_items_active', { qty: totalActiveItems });

        metricNetProfit.textContent = (netProfit >= 0 ? '+' : '') + formatCurrency(netProfit);
        metricProfitPercentage.textContent = getTranslation('sub_roi_closed', { roi: roi.toFixed(2) });

        profitMetricCard.className = 'metric-card';
        profitMetricIcon.className = 'metric-icon';
        
        if (closedCost === 0) {
            profitMetricCard.classList.add('card-glow-orange');
            profitMetricIcon.classList.add('icon-orange');
            metricNetProfit.className = 'currency-text';
        } else if (netProfit >= 0) {
            profitMetricCard.classList.add('card-glow-green');
            profitMetricIcon.classList.add('icon-green');
            metricNetProfit.className = 'currency-text profit-text';
        } else {
            profitMetricCard.classList.add('card-glow-red');
            profitMetricIcon.classList.add('icon-red');
            metricNetProfit.className = 'currency-text loss-text';
        }
    }

    // 11. RENDERIZADO DE TABLA DE INVERSIONES
    function renderTable() {
        const query = searchInput.value.toLowerCase().trim();
        const categoryVal = filterCategory.value;
        const statusVal = filterStatus.value;

        const filtered = transactions.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(query) || (t.notes && t.notes.toLowerCase().includes(query));
            const matchesCategory = categoryVal === 'all' || t.category === categoryVal;
            const matchesStatus = statusVal === 'all' || t.status === statusVal;
            return matchesSearch && matchesCategory && matchesStatus;
        });

        filtered.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
        investmentsList.innerHTML = '';

        if (filtered.length === 0) {
            tableEmptyState.style.display = 'flex';
        } else {
            tableEmptyState.style.display = 'none';

            filtered.forEach(t => {
                const tr = document.createElement('tr');
                const cost = t.qty * t.purchasePrice;
                let revenueText = '-';
                let salePriceText = '-';
                let profitLossText = '-';
                let profitLossClass = '';
                
                if (t.status === 'sold') {
                    const revenue = t.qty * t.salePrice;
                    const diff = revenue - cost;
                    const percent = (diff / cost) * 100;
                    
                    salePriceText = formatCurrency(t.salePrice);
                    revenueText = formatCurrency(revenue);
                    profitLossText = `${diff >= 0 ? '+' : ''}${formatCurrency(diff)} (${percent >= 0 ? '+' : ''}${percent.toFixed(1)}%)`;
                    profitLossClass = diff >= 0 ? 'profit-text' : 'loss-text';
                }

                tr.innerHTML = `
                    <td>
                        <span class="table-item-name">${escapeHTML(t.name)}</span>
                        <span class="table-item-date"><i class="fa-solid fa-calendar-day"></i> ${formatDate(t.purchaseDate)}${t.notes ? ` &bull; ${escapeHTML(t.notes)}` : ''}</span>
                    </td>
                    <td>
                        <span class="badge badge-${t.category}">${getCategoryLabel(t.category)}</span>
                    </td>
                    <td class="number-col">${t.qty}</td>
                    <td class="number-col">${formatCurrency(t.purchasePrice)}</td>
                    <td class="number-col">${formatCurrency(cost)}</td>
                    <td class="number-col">${salePriceText}</td>
                    <td class="number-col">${revenueText}</td>
                    <td class="number-col ${profitLossClass}">${profitLossText}</td>
                    <td>
                        <div class="actions-cell">
                            ${t.status === 'active' ? `
                                <button class="btn-action-icon btn-sell" data-id="${t.id}" title="${currentLang === 'es' ? 'Registrar Venta' : 'Register Sale'}">
                                    <i class="fa-solid fa-cash-register"></i>
                                </button>
                                <button class="btn-action-icon btn-edit" data-id="${t.id}" title="${currentLang === 'es' ? 'Editar Compra' : 'Edit Buy'}">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                            ` : `
                                <button class="btn-action-icon btn-sell" data-id="${t.id}" title="${currentLang === 'es' ? 'Modificar Venta' : 'Modify Sale'}" style="color: var(--profit-green);">
                                    <i class="fa-solid fa-arrows-spin"></i>
                                </button>
                            `}
                            <button class="btn-action-icon btn-delete" data-id="${t.id}" title="${currentLang === 'es' ? 'Eliminar Registro' : 'Delete Record'}">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </td>
                `;

                investmentsList.appendChild(tr);
            });

            document.querySelectorAll('.btn-sell').forEach(btn => {
                btn.addEventListener('click', () => openSaleModal(btn.dataset.id));
            });
            document.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', () => editItem(btn.dataset.id));
            });
            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', () => deleteItem(btn.dataset.id));
            });
        }
    }

    // 12. OPERACIONES CRUD FORMULARIO
    investmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const editId = editIdInput.value;
        const name = itemNameInput.value.trim();
        const category = itemCategoryInput.value;
        const qty = parseInt(itemQtyInput.value);
        const purchasePrice = parseFloat(itemPriceInput.value);
        const purchaseDate = itemDateInput.value;
        const notes = itemNotesInput.value.trim();

        if (editId) {
            const index = transactions.findIndex(t => t.id === editId);
            if (index !== -1) {
                transactions[index].name = name;
                transactions[index].category = category;
                transactions[index].qty = qty;
                transactions[index].purchasePrice = purchasePrice;
                transactions[index].purchaseDate = purchaseDate;
                transactions[index].notes = notes;
                showToast(getTranslation('toast_updated_success'), 'info');
            }
        } else {
            const newItem = {
                id: Date.now().toString(),
                name,
                category,
                qty,
                purchasePrice,
                purchaseDate,
                notes,
                status: 'active',
                salePrice: null,
                saleDate: null
            };

            transactions.push(newItem);
            showToast(getTranslation('toast_added_success'), 'success');
        }

        saveData();
        resetForm();
        renderApp();
    });

    btnCancel.addEventListener('click', () => {
        resetForm();
    });

    function resetForm() {
        editIdInput.value = '';
        itemNameInput.value = '';
        itemCategoryInput.value = 'case';
        itemQtyInput.value = '1';
        itemPriceInput.value = '';
        itemDateInput.value = today;
        itemNotesInput.value = '';

        submitBtnText.textContent = getTranslation('btn_add_portfolio');
        btnCancel.classList.add('hidden');
    }

    function editItem(id) {
        const item = transactions.find(t => t.id === id);
        if (!item) return;

        editIdInput.value = item.id;
        itemNameInput.value = item.name;
        itemCategoryInput.value = item.category;
        itemQtyInput.value = item.qty;
        itemPriceInput.value = item.purchasePrice;
        itemDateInput.value = item.purchaseDate;
        itemNotesInput.value = item.notes || '';

        submitBtnText.textContent = getTranslation('btn_save_changes');
        btnCancel.classList.remove('hidden');

        document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    }

    function deleteItem(id) {
        const item = transactions.find(t => t.id === id);
        if (!item) return;

        if (confirm(getTranslation('toast_delete_confirm', { name: item.name }))) {
            transactions = transactions.filter(t => t.id !== id);
            saveData();
            renderApp();
            showToast(getTranslation('toast_deleted_success'), 'danger');
        }
    }

    // 13. REGISTRO DE VENTAS MODAL
    function openSaleModal(id) {
        const item = transactions.find(t => t.id === id);
        if (!item) return;

        saleItemIdInput.value = item.id;
        modalItemName.textContent = item.name;
        modalItemBadge.className = `badge badge-${item.category}`;
        modalItemBadge.textContent = getCategoryLabel(item.category);

        saleQtyInput.value = item.qty;
        saleQtyInput.max = item.qty;
        saleQtyMax.textContent = `${getTranslation('available')}: ${item.qty}`;

        if (item.status === 'sold') {
            salePriceInput.value = item.salePrice;
        } else {
            salePriceInput.value = '';
        }

        updateModalCalculations(item);
        saleModal.classList.add('active');
    }

    function updateModalCalculations(item) {
        const qty = parseInt(saleQtyInput.value) || 0;
        const salePrice = parseFloat(salePriceInput.value) || 0;

        const purchasePrice = item.purchasePrice;
        const totalCost = qty * purchasePrice;
        const totalRevenue = qty * salePrice;
        const netProfit = totalRevenue - totalCost;

        modalCalcCost.textContent = formatCurrency(totalCost);
        modalCalcRevenue.textContent = formatCurrency(totalRevenue);
        
        modalCalcProfit.textContent = (netProfit >= 0 ? '+' : '') + formatCurrency(netProfit);
        modalCalcProfit.className = netProfit >= 0 ? 'profit-text' : 'loss-text';
    }

    saleQtyInput.addEventListener('input', () => {
        const id = saleItemIdInput.value;
        const item = transactions.find(t => t.id === id);
        if (item) {
            const max = parseInt(saleQtyInput.max);
            if (parseInt(saleQtyInput.value) > max) {
                saleQtyInput.value = max;
            }
            updateModalCalculations(item);
        }
    });

    salePriceInput.addEventListener('input', () => {
        const id = saleItemIdInput.value;
        const item = transactions.find(t => t.id === id);
        if (item) updateModalCalculations(item);
    });

    function closeModal() {
        saleModal.classList.remove('active');
        saleForm.reset();
    }

    btnCloseModal.addEventListener('click', closeModal);
    btnCancelSale.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === saleModal) closeModal();
    });

    saleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = saleItemIdInput.value;
        const saleQty = parseInt(saleQtyInput.value);
        const salePrice = parseFloat(salePriceInput.value);
        const saleDate = today;

        const index = transactions.findIndex(t => t.id === id);
        if (index === -1) return;

        const item = transactions[index];

        if (saleQty === item.qty) {
            transactions[index].status = 'sold';
            transactions[index].salePrice = salePrice;
            transactions[index].saleDate = saleDate;
            showToast(getTranslation('toast_sale_registered'), 'success');
        } else if (saleQty < item.qty) {
            transactions[index].qty = item.qty - saleQty;

            const soldItem = {
                id: Date.now().toString() + '-sold',
                name: item.name,
                category: item.category,
                qty: saleQty,
                purchasePrice: item.purchasePrice,
                purchaseDate: item.purchaseDate,
                notes: (item.notes ? item.notes + ' ' : '') + getTranslation('sold_partial'),
                status: 'sold',
                salePrice: salePrice,
                saleDate: saleDate
            };

            transactions.push(soldItem);
            showToast(getTranslation('toast_partial_sale', { qty: saleQty }), 'success');
        }

        saveData();
        closeModal();
        renderApp();
    });

    // 14. FILTROS & BUSQUEDAS
    searchInput.addEventListener('input', renderTable);
    filterCategory.addEventListener('change', renderTable);
    filterStatus.addEventListener('change', renderTable);

    // 15. RESPALDO EXPORT / IMPORT
    btnExport.addEventListener('click', () => {
        if (transactions.length === 0) {
            showToast(getTranslation('toast_no_data_export'), 'danger');
            return;
        }

        const dataStr = JSON.stringify(transactions, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = `cs2invest_backup_${today}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showToast(getTranslation('toast_backup_exported'), 'success');
    });

    btnImportTrigger.addEventListener('click', () => {
        importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const imported = JSON.parse(e.target.result);
                
                if (Array.isArray(imported) && (imported.length === 0 || (imported[0].id && imported[0].name && imported[0].purchasePrice))) {
                    transactions = imported;
                    saveData();
                    renderApp();
                    showToast(getTranslation('toast_import_success'), 'success');
                } else {
                    showToast(getTranslation('toast_import_invalid'), 'danger');
                }
            } catch (err) {
                showToast(getTranslation('toast_import_error'), 'danger');
            }
        };
        reader.readAsText(file);
        importFileInput.value = '';
    });

    btnClear.addEventListener('click', () => {
        if (confirm(getTranslation('toast_clear_all_confirm'))) {
            transactions = [];
            saveData();
            renderApp();
            showToast(getTranslation('toast_clear_all_success'), 'danger');
        }
    });

    // 16. TABS DE GRÁFICOS
    tabTitles.forEach(tab => {
        tab.addEventListener('click', () => {
            tabTitles.forEach(t => t.classList.remove('active'));
            chartContainers.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetTab = tab.dataset.tab;
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // 17. INTEGRACIÓN DE CHART.JS EN DOS IDIOMAS
    function initCharts() {
        Chart.defaults.color = '#8a99ad';
        Chart.defaults.font.family = 'Outfit, sans-serif';
        Chart.defaults.font.size = 12;

        const ctxDist = document.getElementById('chart-distribution').getContext('2d');
        distributionChart = new Chart(ctxDist, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: ['#e4ae39', '#eb4b4b', '#8847ff', '#4b69ff', '#d32ce6', '#b0c3d9'],
                    borderWidth: 2,
                    borderColor: '#12161f',
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, font: { weight: '600' } }
                    },
                    tooltip: {
                        backgroundColor: '#161a22',
                        titleColor: '#fff',
                        bodyColor: '#e2e8f0',
                        borderColor: '#2b384f',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) { return ` ${context.label}: ${formatCurrency(context.raw)}`; }
                        }
                    }
                },
                cutout: '65%'
            }
        });

        const ctxPerf = document.getElementById('chart-performance').getContext('2d');
        performanceChart = new Chart(ctxPerf, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [
                    {
                        label: getTranslation('chart_buy_label'),
                        data: [],
                        backgroundColor: 'rgba(242, 111, 17, 0.4)',
                        borderColor: '#f26f11',
                        borderWidth: 1.5,
                        borderRadius: 4
                    },
                    {
                        label: getTranslation('chart_sell_label'),
                        data: [],
                        backgroundColor: 'rgba(0, 255, 136, 0.4)',
                        borderColor: '#00ff88',
                        borderWidth: 1.5,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { color: 'rgba(255, 255, 255, 0.02)' } },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.02)' },
                        ticks: { callback: function(value) { return value + '€'; } }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, font: { weight: '600' } }
                    },
                    tooltip: {
                        backgroundColor: '#161a22',
                        titleColor: '#fff',
                        bodyColor: '#e2e8f0',
                        borderColor: '#2b384f',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) { return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`; }
                        }
                    }
                }
            }
        });
    }

    function updateCharts() {
        if (!distributionChart || !performanceChart) return;

        // --- 1. Gráfico de Distribución ---
        const distData = { 'case': 0, 'skin': 0, 'sticker': 0, 'capsule': 0, 'agent': 0, 'other': 0 };
        let hasData = false;

        transactions.forEach(t => {
            const cost = t.qty * t.purchasePrice;
            if (distData[t.category] !== undefined) {
                distData[t.category] += cost;
                if (cost > 0) hasData = true;
            }
        });

        if (hasData) {
            document.getElementById('chart-distribution').classList.remove('hidden');
            distEmpty.classList.add('hidden');

            const labels = [];
            const data = [];
            const colors = [];
            const colorMapping = { 'case': '#e4ae39', 'skin': '#eb4b4b', 'sticker': '#8847ff', 'capsule': '#4b69ff', 'agent': '#d32ce6', 'other': '#b0c3d9' };

            Object.keys(distData).forEach(cat => {
                if (distData[cat] > 0) {
                    labels.push(getCategoryLabel(cat));
                    data.push(distData[cat]);
                    colors.push(colorMapping[cat]);
                }
            });

            distributionChart.data.labels = labels;
            distributionChart.data.datasets[0].data = data;
            distributionChart.data.datasets[0].backgroundColor = colors;
            distributionChart.update();
        } else {
            document.getElementById('chart-distribution').classList.add('hidden');
            distEmpty.classList.remove('hidden');
        }

        // --- 2. Gráfico de Rendimiento ---
        const perfData = {
            'case': { cost: 0, sale: 0 },
            'skin': { cost: 0, sale: 0 },
            'sticker': { cost: 0, sale: 0 },
            'capsule': { cost: 0, sale: 0 },
            'agent': { cost: 0, sale: 0 },
            'other': { cost: 0, sale: 0 }
        };
        let hasSales = false;

        transactions.forEach(t => {
            if (t.status === 'sold') {
                const cost = t.qty * t.purchasePrice;
                const sale = t.qty * t.salePrice;
                perfData[t.category].cost += cost;
                perfData[t.category].sale += sale;
                hasSales = true;
            }
        });

        if (hasSales) {
            document.getElementById('chart-performance').classList.remove('hidden');
            perfEmpty.classList.add('hidden');

            const labels = [];
            const costs = [];
            const sales = [];

            Object.keys(perfData).forEach(cat => {
                if (perfData[cat].cost > 0 || perfData[cat].sale > 0) {
                    labels.push(getCategoryLabel(cat));
                    costs.push(perfData[cat].cost);
                    sales.push(perfData[cat].sale);
                }
            });

            performanceChart.data.labels = labels;
            performanceChart.data.datasets[0].label = getTranslation('chart_buy_label');
            performanceChart.data.datasets[0].data = costs;
            performanceChart.data.datasets[1].label = getTranslation('chart_sell_label');
            performanceChart.data.datasets[1].data = sales;
            performanceChart.update();
        } else {
            document.getElementById('chart-performance').classList.add('hidden');
            perfEmpty.classList.remove('hidden');
        }
    }

    // 18. FUNCIONES AUXILIARES
    function formatCurrency(val) {
        return new Intl.NumberFormat(currentLang === 'es' ? 'es-ES' : 'en-US', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(val);
    }

    function formatDate(dateStr) {
        const [year, month, day] = dateStr.split('-');
        return currentLang === 'es' ? `${day}/${month}/${year}` : `${month}/${day}/${year}`;
    }

    function getCategoryLabel(cat) {
        return getTranslation(`cat_${cat}`);
    }

    function escapeHTML(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Sistema Toast Bilingüe
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'danger') icon = 'fa-circle-exclamation';

        toast.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${escapeHTML(message)}</span>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-out');
            toast.addEventListener('animationend', () => { toast.remove(); });
        }, 3500);
    }

    // Inicializar app
    init();
});
