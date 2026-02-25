/** Shimmer skeleton shown for ~600ms on first dashboard mount */
export default function DashboardSkeleton() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* Back link skeleton */}
      <div className="skel" style={{ width: "120px", height: "14px", marginBottom: "1.25rem" }} />

      {/* Title skeleton */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="skel" style={{ width: "140px", height: "22px", marginBottom: "6px" }} />
        <div className="skel" style={{ width: "220px", height: "14px" }} />
      </div>

      {/* KPI grid skeleton */}
      <div className="kpi-grid" style={{ marginBottom: "1rem" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div className="skel" style={{ width: "110px", height: "12px" }} />
              <div className="skel" style={{ width: "36px", height: "36px", borderRadius: "0.625rem" }} />
            </div>
            <div className="skel" style={{ width: "90px", height: "28px", marginBottom: "8px" }} />
            <div className="skel" style={{ width: "70px", height: "11px" }} />
          </div>
        ))}
      </div>

      {/* Charts row skeleton */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1rem" }} className="dashboard-charts-row">
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div>
              <div className="skel" style={{ width: "130px", height: "14px", marginBottom: "6px" }} />
              <div className="skel" style={{ width: "180px", height: "12px" }} />
            </div>
            <div className="skel" style={{ width: "140px", height: "32px", borderRadius: "0.625rem" }} />
          </div>
          <div className="skel" style={{ width: "100%", height: "260px", borderRadius: "0.5rem" }} />
        </div>
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
          <div className="skel" style={{ width: "110px", height: "14px", marginBottom: "6px" }} />
          <div className="skel" style={{ width: "160px", height: "12px", marginBottom: "1.5rem" }} />
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div className="skel" style={{ width: "120px", height: "120px", borderRadius: "9999px", flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[85, 65, 45, 30].map((w, i) => (
                <div key={i} className="skel" style={{ width: `${w}%`, height: "14px" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row skeleton */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="dashboard-bottom-row">
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
          <div className="skel" style={{ width: "100px", height: "14px", marginBottom: "1.25rem" }} />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="skel" style={{ width: "36px", height: "36px", borderRadius: "0.5rem", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div className="skel" style={{ width: "120px", height: "13px", marginBottom: "5px" }} />
                <div className="skel" style={{ width: "80px", height: "11px" }} />
              </div>
              <div className="skel" style={{ width: "60px", height: "11px" }} />
              <div className="skel" style={{ width: "80px", height: "8px", borderRadius: "4px" }} />
              <div className="skel" style={{ width: "45px", height: "11px" }} />
            </div>
          ))}
        </div>
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
          <div className="skel" style={{ width: "90px", height: "14px", marginBottom: "1.25rem" }} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="skel" style={{ width: "32px", height: "32px", borderRadius: "0.5rem", flexShrink: 0, marginTop: "2px" }} />
              <div style={{ flex: 1 }}>
                <div className="skel" style={{ width: "150px", height: "13px", marginBottom: "5px" }} />
                <div className="skel" style={{ width: "200px", height: "11px" }} />
              </div>
              <div className="skel" style={{ width: "50px", height: "11px", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
