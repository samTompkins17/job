
const CandidateLayout = [
    { to: "/espace", label: "Espace du candidat", end: true },
    { to: "/espace/candidatures", label: "Mes candidatures" },
    { to: "/espace/profil", label: "Mon profil" },
    { to: "/espace/messages", label: "Messages" },
    { to: "/espace/offres", label: "Offres" },
]

export default function CandidatLayout() {
    return (
        <DashboardShell links={CandidateLayout}>
            <Suspense fallback={<Spinner label="Chargement de la page candidat..." />}>
                
            </Suspense>
        </DashboardShell>
    )
}
