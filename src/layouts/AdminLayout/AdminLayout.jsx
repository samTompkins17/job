import { Suspense } from "react"

const LINKS = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/offres", label: "Offres" },
    { to: "/admin/candidatures", label: "Candidatures" },
    { to: "/admin/messages", label: "Messages" },
    { to: "/admin/abonne", label: "Newsletter" },

]

export default function AdminLayout() {
    return (
        <DashboardShell links={LINKS}>
            <Suspense fallback={<Spinner label="Chargement de la page admin..." />}>
            </Suspense>
        </DashboardShell>
    )
}