(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/supabase/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createClient": ()=>createClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://qdgmvcnaobgkhveohlxr.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkZ212Y25hb2Jna2h2ZW9obHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMDQzNTAsImV4cCI6MjA2OTY4MDM1MH0.9yyXsQogu1fRu6lTKb9NDY5N2c2D9nM3M1Zihm5FmfM"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ThemeToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": ()=>ThemeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeToggle = (param)=>{
    let { className = '', showText = false } = param;
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ".concat(className),
        "aria-label": "Switch to ".concat(theme === 'dark' ? 'light' : 'dark', " mode"),
        children: [
            theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSun"], {
                className: "w-4 h-4 sm:w-5 sm:h-5"
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoon"], {
                className: "w-4 h-4 sm:w-5 sm:h-5"
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-2 text-sm",
                children: theme === 'dark' ? 'Light' : 'Dark'
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/dateMask.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Converts an ISO date string to Brazilian date format (DD/MM/YYYY)
 */ __turbopack_context__.s({
    "isoToBrazilianDate": ()=>isoToBrazilianDate
});
const isoToBrazilianDate = (isoDate)=>{
    if (!isoDate) return '';
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/appointments/new/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dateMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dateMask.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const NewAppointmentPage = ()=>{
    var _languages_find;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedServices, setSelectedServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableSlots, setAvailableSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pt");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('date');
    // Fetch services from database
    const fetchServices = async ()=>{
        setIsLoading(true);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
                return;
            }
            const { data, error } = await supabase.from('services').select('*').eq('is_active', true).order('name');
            if (error) {
                console.error('Error fetching services:', error);
                setError(t.errorCreating);
            } else {
                setServices(data || []);
            }
        } catch (error) {
            console.error('Error fetching services:', error);
            setError(t.errorCreating);
        } finally{
            setIsLoading(false);
        }
    };
    // Language translations
    const translations = {
        en: {
            title: "New Appointment",
            subtitle: "Schedule your appointment",
            backToAppointments: "Back to Appointments",
            selectDate: "Select Date",
            selectTime: "Select Time",
            selectService: "Select Service",
            confirmAppointment: "Confirm Appointment",
            availableSlots: "Available Slots",
            noAvailableSlots: "No available slots for this date",
            selectDifferentDate: "Please select a different date",
            businessHours: "Business Hours",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
            closed: "Closed",
            next: "Next",
            previous: "Previous",
            confirm: "Confirm",
            cancel: "Cancel",
            appointmentDetails: "Appointment Details",
            date: "Date",
            time: "Time",
            service: "Service",
            duration: "Duration",
            price: "Price",
            total: "Total",
            createAppointment: "Create Appointment",
            appointmentCreated: "Appointment created successfully!",
            errorCreating: "Error creating appointment. Please try again.",
            loading: "Loading...",
            noServices: "No services available",
            selectServiceFirst: "Please select a service first",
            noTimeSelected: "Please select a time",
            noDateSelected: "Please select a date",
            appointmentTitle: "Appointment",
            notes: "Notes (Optional)",
            location: "Location (Optional)",
            unavailable: "Unavailable",
            available: "Available",
            selectedServices: "Selected Services",
            totalDuration: "Total Duration"
        },
        pt: {
            title: "Novo Agendamento",
            subtitle: "Agende sua consulta",
            backToAppointments: "Voltar aos Agendamentos",
            selectDate: "Selecionar Data",
            selectTime: "Selecionar Horário",
            selectService: "Selecionar Serviço",
            confirmAppointment: "Confirmar Agendamento",
            availableSlots: "Horários Disponíveis",
            noAvailableSlots: "Nenhum horário disponível para esta data",
            selectDifferentDate: "Por favor selecione uma data diferente",
            businessHours: "Horário de Funcionamento",
            monday: "Segunda-feira",
            tuesday: "Terça-feira",
            wednesday: "Quarta-feira",
            thursday: "Quinta-feira",
            friday: "Sexta-feira",
            saturday: "Sábado",
            sunday: "Domingo",
            closed: "Fechado",
            next: "Próximo",
            previous: "Anterior",
            confirm: "Confirmar",
            cancel: "Cancelar",
            appointmentDetails: "Detalhes do Agendamento",
            date: "Data",
            time: "Horário",
            service: "Serviço",
            duration: "Duração",
            price: "Preço",
            total: "Total",
            createAppointment: "Criar Agendamento",
            appointmentCreated: "Agendamento criado com sucesso!",
            errorCreating: "Erro ao criar agendamento. Tente novamente.",
            loading: "Carregando...",
            noServices: "Nenhum serviço disponível",
            selectServiceFirst: "Por favor selecione um serviço primeiro",
            noTimeSelected: "Por favor selecione um horário",
            noDateSelected: "Por favor selecione uma data",
            appointmentTitle: "Agendamento",
            notes: "Observações (Opcional)",
            location: "Local (Opcional)",
            unavailable: "Indisponível",
            available: "Disponível",
            selectedServices: "Serviços Selecionados",
            totalDuration: "Duração Total"
        },
        es: {
            title: "Nueva Cita",
            subtitle: "Programa tu cita",
            backToAppointments: "Volver a las Citas",
            selectDate: "Seleccionar Fecha",
            selectTime: "Seleccionar Hora",
            selectService: "Seleccionar Servicio",
            confirmAppointment: "Confirmar Cita",
            availableSlots: "Horarios Disponibles",
            noAvailableSlots: "No hay horarios disponibles para esta fecha",
            selectDifferentDate: "Por favor selecciona una fecha diferente",
            businessHours: "Horario de Atención",
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
            saturday: "Sábado",
            sunday: "Domingo",
            closed: "Cerrado",
            next: "Siguiente",
            previous: "Anterior",
            confirm: "Confirmar",
            cancel: "Cancelar",
            appointmentDetails: "Detalles de la Cita",
            date: "Fecha",
            time: "Hora",
            service: "Servicio",
            duration: "Duración",
            price: "Precio",
            total: "Total",
            createAppointment: "Crear Cita",
            appointmentCreated: "¡Cita creada exitosamente!",
            errorCreating: "Error al crear cita. Intenta de nuevo.",
            loading: "Cargando...",
            noServices: "No hay servicios disponibles",
            selectServiceFirst: "Por favor selecciona un servicio primero",
            noTimeSelected: "Por favor selecciona una hora",
            noDateSelected: "Por favor selecciona una fecha",
            appointmentTitle: "Cita",
            notes: "Notas (Opcional)",
            location: "Ubicación (Opcional)",
            unavailable: "No Disponible",
            available: "Disponible",
            selectedServices: "Servicios Seleccionados",
            totalDuration: "Duración Total"
        },
        fr: {
            title: "Nouveau Rendez-vous",
            subtitle: "Planifiez votre rendez-vous",
            backToAppointments: "Retour aux Rendez-vous",
            selectDate: "Sélectionner la Date",
            selectTime: "Sélectionner l'Heure",
            selectService: "Sélectionner le Service",
            confirmAppointment: "Confirmer le Rendez-vous",
            availableSlots: "Créneaux Disponibles",
            noAvailableSlots: "Aucun créneau disponible pour cette date",
            selectDifferentDate: "Veuillez sélectionner une date différente",
            businessHours: "Heures d'Ouverture",
            monday: "Lundi",
            tuesday: "Mardi",
            wednesday: "Mercredi",
            thursday: "Jeudi",
            friday: "Vendredi",
            saturday: "Samedi",
            sunday: "Dimanche",
            closed: "Fermé",
            next: "Suivant",
            previous: "Précédent",
            confirm: "Confirmer",
            cancel: "Annuler",
            appointmentDetails: "Détails du Rendez-vous",
            date: "Date",
            time: "Heure",
            service: "Service",
            duration: "Durée",
            price: "Prix",
            total: "Total",
            createAppointment: "Créer le Rendez-vous",
            appointmentCreated: "Rendez-vous créé avec succès!",
            errorCreating: "Erreur lors de la création du rendez-vous. Veuillez réessayer.",
            loading: "Chargement...",
            noServices: "Aucun service disponible",
            selectServiceFirst: "Veuillez sélectionner un service d'abord",
            noTimeSelected: "Veuillez sélectionner une heure",
            noDateSelected: "Veuillez sélectionner une date",
            appointmentTitle: "Rendez-vous",
            notes: "Notes (Optionnel)",
            location: "Lieu (Optionnel)",
            unavailable: "Indisponible",
            available: "Disponible",
            selectedServices: "Services Sélectionnés",
            totalDuration: "Durée Totale"
        }
    };
    const t = translations[language];
    const languages = [
        {
            code: "pt",
            name: "Português",
            flag: "🇧🇷"
        },
        {
            code: "en",
            name: "English",
            flag: "🇺🇸"
        },
        {
            code: "es",
            name: "Español",
            flag: "🇪🇸"
        },
        {
            code: "fr",
            name: "Français",
            flag: "🇫🇷"
        }
    ];
    // Default business hours (can be fetched from user settings later)
    const businessHours = {
        monday: {
            start: "08:00",
            end: "20:00"
        },
        tuesday: {
            start: "08:00",
            end: "20:00"
        },
        wednesday: {
            start: "08:00",
            end: "20:00"
        },
        thursday: {
            start: "08:00",
            end: "20:00"
        },
        friday: {
            start: "08:00",
            end: "20:00"
        },
        saturday: {
            start: "08:00",
            end: "17:00"
        },
        sunday: {
            start: null,
            end: null
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAppointmentPage.useEffect": ()=>{
            document.documentElement.lang = language;
        }
    }["NewAppointmentPage.useEffect"], [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAppointmentPage.useEffect": ()=>{
            fetchServices();
        }
    }["NewAppointmentPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAppointmentPage.useEffect": ()=>{
            if (selectedDate) {
                generateAvailableSlots();
            }
        }
    }["NewAppointmentPage.useEffect"], [
        selectedDate
    ]);
    const generateAvailableSlots = async ()=>{
        if (!selectedDate) return;
        const date = new Date(selectedDate);
        const shortDay = date.toLocaleDateString('en-US', {
            weekday: 'short'
        }).toLowerCase();
        const dayMapping = {
            'mon': 'monday',
            'tue': 'tuesday',
            'wed': 'wednesday',
            'thu': 'thursday',
            'fri': 'friday',
            'sat': 'saturday',
            'sun': 'sunday'
        };
        const dayOfWeek = dayMapping[shortDay];
        const daySchedule = businessHours[dayOfWeek];
        if (!daySchedule.start || !daySchedule.end) {
            setAvailableSlots([]);
            return;
        }
        // Fetch ALL existing appointments for this date (public availability check)
        // This ensures all users see the same availability, preventing double-booking
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setAvailableSlots([]);
            return;
        }
        const { data: existingAppointments } = await supabase.from('appointment_availability').select('start_time, end_time').eq('appointment_date', selectedDate);
        const slots = [];
        const startTime = new Date("2000-01-01T".concat(daySchedule.start));
        const endTime = new Date("2000-01-01T".concat(daySchedule.end));
        const slotDuration = 60; // 1 hour slots
        while(startTime < endTime){
            const timeString = startTime.toTimeString().slice(0, 5);
            // Calculate end time for this hour slot
            const slotEndTime = new Date(startTime.getTime() + 60 * 60000); // 1 hour
            const slotEndString = slotEndTime.toTimeString().slice(0, 5);
            // Check if this hour slot conflicts with existing appointments
            const isAvailable = !(existingAppointments === null || existingAppointments === void 0 ? void 0 : existingAppointments.some((appointment)=>{
                const appointmentStart = appointment.start_time;
                const appointmentEnd = appointment.end_time;
                // Check for overlap: new appointment starts before existing ends AND new appointment ends after existing starts
                return timeString < appointmentEnd && slotEndString > appointmentStart;
            }));
            // Format the time range (e.g., "08:00 - 09:00")
            const formattedStart = startTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            });
            const formattedEnd = slotEndTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            });
            slots.push({
                time: timeString,
                available: isAvailable,
                formatted: "".concat(formattedStart, " - ").concat(formattedEnd)
            });
            startTime.setMinutes(startTime.getMinutes() + slotDuration);
        }
        setAvailableSlots(slots);
    };
    const handleDateSelect = (date)=>{
        setSelectedDate(date);
        setSelectedTime('');
        setStep('time');
    };
    const handleTimeSelect = (time)=>{
        setSelectedTime(time);
        setStep('service');
    };
    const handleServiceSelect = (service)=>{
        setSelectedServices((prev)=>{
            const isSelected = prev.find((s)=>s.id === service.id);
            if (isSelected) {
                // Remove service if already selected
                return prev.filter((s)=>s.id !== service.id);
            } else {
                // Add service if not selected
                return [
                    ...prev,
                    service
                ];
            }
        });
    };
    const handleContinueToConfirm = ()=>{
        if (selectedServices.length > 0) {
            setStep('confirm');
        }
    };
    const handleCreateAppointment = async ()=>{
        if (!selectedDate || !selectedTime || selectedServices.length === 0) {
            setError(t.errorCreating);
            return;
        }
        setIsCreating(true);
        setError(null);
        setSuccess(null);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
                return;
            }
            // Calculate total duration and end time
            const totalDuration = selectedServices.reduce((total, service)=>total + service.duration_minutes, 0);
            const startTime = new Date("2000-01-01T".concat(selectedTime));
            const endTime = new Date(startTime.getTime() + totalDuration * 60000);
            const endTimeString = endTime.toTimeString().slice(0, 5);
            // Create service names for title
            const serviceNames = selectedServices.map((s)=>s.name).join(', ');
            const totalPrice = selectedServices.reduce((total, service)=>total + service.price, 0);
            const { error } = await supabase.from('appointments').insert({
                user_id: user.id,
                title: "".concat(t.appointmentTitle, " - ").concat(serviceNames),
                description: "Services: ".concat(serviceNames),
                appointment_date: selectedDate,
                start_time: selectedTime,
                end_time: endTimeString,
                status: 'scheduled',
                location: '',
                notes: '',
                reminder_sent: false
            });
            if (error) {
                console.error('Error creating appointment:', error);
                setError(t.errorCreating);
            } else {
                setSuccess(t.appointmentCreated);
                setTimeout(()=>{
                    router.push('/appointments');
                }, 2000);
            }
        } catch (error) {
            console.error('Error creating appointment:', error);
            setError(t.errorCreating);
        } finally{
            setIsCreating(false);
        }
    };
    const getDayName = (dateString)=>{
        const date = new Date(dateString);
        const dayNames = {
            monday: t.monday,
            tuesday: t.tuesday,
            wednesday: t.wednesday,
            thursday: t.thursday,
            friday: t.friday,
            saturday: t.saturday,
            sunday: t.sunday
        };
        const shortDay = date.toLocaleDateString('en-US', {
            weekday: 'short'
        }).toLowerCase();
        const dayMapping = {
            'mon': 'monday',
            'tue': 'tuesday',
            'wed': 'wednesday',
            'thu': 'thursday',
            'fri': 'friday',
            'sat': 'saturday',
            'sun': 'sunday'
        };
        const dayKey = dayMapping[shortDay];
        return dayNames[dayKey];
    };
    const isDateAvailable = (dateString)=>{
        const date = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Can't book in the past
        if (date < today) return false;
        // Check if it's within business hours
        const shortDay = date.toLocaleDateString('en-US', {
            weekday: 'short'
        }).toLowerCase();
        const dayMapping = {
            'mon': 'monday',
            'tue': 'tuesday',
            'wed': 'wednesday',
            'thu': 'thursday',
            'fri': 'friday',
            'sat': 'saturday',
            'sun': 'sunday'
        };
        const dayOfWeek = dayMapping[shortDay];
        const daySchedule = businessHours[dayOfWeek];
        return daySchedule.start !== null && daySchedule.end !== null;
    };
    const getNextAvailableDates = ()=>{
        const dates = [];
        const today = new Date();
        for(let i = 0; i < 14; i++){
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const dateString = date.toISOString().split('T')[0];
            if (isDateAvailable(dateString)) {
                dates.push(dateString);
            }
        }
        return dates;
    };
    const renderDateSelection = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-gray-900 dark:text-white",
                    children: t.selectDate
                }, void 0, false, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 556,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3",
                    children: getNextAvailableDates().map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDateSelect(date),
                            className: "p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-900 dark:text-white",
                                    children: new Date(date).getDate()
                                }, void 0, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                    children: getDayName(date)
                                }, void 0, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, date, true, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 562,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 560,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/appointments/new/page.tsx",
            lineNumber: 555,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderTimeSelection = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-900 dark:text-white",
                            children: t.selectTime
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 582,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('date'),
                            className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                            children: t.previous
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 585,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 581,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dateMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToBrazilianDate"])(selectedDate),
                        " - ",
                        getDayName(selectedDate)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 593,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                availableSlots.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",
                    children: availableSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>slot.available && handleTimeSelect(slot.time),
                            disabled: !slot.available,
                            className: "p-4 border rounded-lg transition-colors text-center ".concat(slot.available ? 'border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer' : 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-50'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium ".concat(slot.available ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'),
                                    children: slot.formatted
                                }, void 0, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs mt-1 ".concat(slot.available ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'),
                                    children: slot.available ? t.available : t.unavailable
                                }, void 0, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, slot.time, true, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 600,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 598,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                            className: "w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: t.noAvailableSlots
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('date'),
                            className: "mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                            children: t.selectDifferentDate
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 628,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/appointments/new/page.tsx",
            lineNumber: 580,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderServiceSelection = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-900 dark:text-white",
                            children: t.selectService
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 645,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('time'),
                            className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                            children: t.previous
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 648,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 644,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dateMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToBrazilianDate"])(selectedDate),
                        " às ",
                        selectedTime
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 656,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                services.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: services.map((service)=>{
                                const isSelected = selectedServices.find((s)=>s.id === service.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleServiceSelect(service),
                                    className: "p-6 border rounded-lg transition-colors text-center ".concat(isSelected ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                        className: "w-6 h-6 text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 26
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            service.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: [
                                                    service.duration_minutes,
                                                    " min"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-semibold text-blue-600 dark:text-blue-400",
                                                children: [
                                                    "R$ ",
                                                    service.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/appointments/new/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, service.id, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 662,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-blue-900 dark:text-blue-100 mb-2",
                                    children: [
                                        t.selectedServices,
                                        " (",
                                        selectedServices.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        selectedServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-800 dark:text-blue-200",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 dark:text-blue-400",
                                                        children: [
                                                            "R$ ",
                                                            service.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, service.id, true, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-blue-200 dark:border-blue-600 pt-2 mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-900 dark:text-blue-100",
                                                        children: "Total:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 dark:text-blue-400",
                                                        children: [
                                                            "R$ ",
                                                            selectedServices.reduce((total, service)=>total + service.price, 0).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/appointments/new/page.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 702,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleContinueToConfirm,
                                disabled: selectedServices.length === 0,
                                className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: t.next
                            }, void 0, false, {
                                fileName: "[project]/app/appointments/new/page.tsx",
                                lineNumber: 726,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 725,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 661,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                            className: "w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 737,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: t.noServices
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 738,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 736,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/appointments/new/page.tsx",
            lineNumber: 643,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderConfirmation = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-900 dark:text-white",
                            children: t.confirmAppointment
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 747,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('service'),
                            className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                            children: t.previous
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 750,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 746,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-medium text-gray-900 dark:text-white mb-4",
                            children: t.appointmentDetails
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 759,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400",
                                            children: [
                                                t.date,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 765,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 dark:text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dateMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToBrazilianDate"])(selectedDate)
                                        }, void 0, false, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 766,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 764,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400",
                                            children: [
                                                t.time,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 772,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 dark:text-white",
                                            children: selectedTime
                                        }, void 0, false, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 771,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: selectedServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-900 dark:text-white font-medium",
                                                            children: service.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/appointments/new/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                service.duration_minutes,
                                                                " min"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/appointments/new/page.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900 dark:text-white",
                                                    children: [
                                                        "R$ ",
                                                        service.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, service.id, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 778,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200 dark:border-gray-600 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                        t.total,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: [
                                                        "R$ ",
                                                        selectedServices.reduce((total, service)=>total + service.price, 0).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 791,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                            children: [
                                                t.totalDuration,
                                                ": ",
                                                selectedServices.reduce((total, service)=>total + service.duration_minutes, 0),
                                                " min"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 797,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/appointments/new/page.tsx",
                                    lineNumber: 790,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 763,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 758,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('service'),
                            className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                            children: t.cancel
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 805,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreateAppointment,
                            disabled: isCreating,
                            className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50",
                            children: isCreating ? t.loading : t.createAppointment
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 811,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 804,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/appointments/new/page.tsx",
            lineNumber: 745,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 827,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: t.loading
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 828,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 826,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/appointments/new/page.tsx",
                lineNumber: 825,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/appointments/new/page.tsx",
            lineNumber: 824,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full mx-auto bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/appointments'),
                                        className: "flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 847,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: t.backToAppointments
                                            }, void 0, false, {
                                                fileName: "[project]/app/appointments/new/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/appointments/new/page.tsx",
                                        lineNumber: 843,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-semibold text-gray-900 dark:text-white",
                                        children: t.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/appointments/new/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/appointments/new/page.tsx",
                                lineNumber: 842,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage(language === 'pt' ? 'en' : language === 'en' ? 'es' : language === 'es' ? 'fr' : 'pt'),
                                            className: "flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGlobe"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (_languages_find = languages.find((l)=>l.code === language)) === null || _languages_find === void 0 ? void 0 : _languages_find.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/app/appointments/new/page.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/appointments/new/page.tsx",
                                            lineNumber: 859,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/appointments/new/page.tsx",
                                        lineNumber: 858,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                        fileName: "[project]/app/appointments/new/page.tsx",
                                        lineNumber: 871,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/appointments/new/page.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/appointments/new/page.tsx",
                        lineNumber: 840,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/appointments/new/page.tsx",
                    lineNumber: 839,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/appointments/new/page.tsx",
                lineNumber: 838,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/app/appointments/new/page.tsx",
                                lineNumber: 880,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/appointments/new/page.tsx",
                                lineNumber: 883,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/appointments/new/page.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 dark:text-red-400 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 891,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/appointments/new/page.tsx",
                        lineNumber: 890,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-green-600 dark:text-green-400 text-sm",
                            children: success
                        }, void 0, false, {
                            fileName: "[project]/app/appointments/new/page.tsx",
                            lineNumber: 897,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/appointments/new/page.tsx",
                        lineNumber: 896,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6",
                        children: [
                            step === 'date' && renderDateSelection(),
                            step === 'time' && renderTimeSelection(),
                            step === 'service' && renderServiceSelection(),
                            step === 'confirm' && renderConfirmation()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/appointments/new/page.tsx",
                        lineNumber: 902,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/appointments/new/page.tsx",
                lineNumber: 878,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/appointments/new/page.tsx",
        lineNumber: 836,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NewAppointmentPage, "wym6axzC/Yty8vCSbTmbjmvIrdo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = NewAppointmentPage;
const __TURBOPACK__default__export__ = NewAppointmentPage;
var _c;
__turbopack_context__.k.register(_c, "NewAppointmentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4b99f515._.js.map