// components/ServicesRow.jsx
export default function ServicesRow() {
  return (
    <section className="w-full bg-white py-10">
      <div
        className="
          mx-auto flex max-w-5xl flex-col items-center gap-10
          md:flex-row md:items-start md:justify-between
        "
      >
        <ServiceItem title="RESIDENTIAL SNOW REMOVAL" Icon={HouseIcon} />
        <ServiceItem title="COMMERCIAL SNOW REMOVAL" Icon={SnowflakeIcon} />
        <ServiceItem title="BLACK ICE TREATMENT" Icon={DropletIcon} />
      </div>
    </section>
  );
}

function ServiceItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* icon + text same color */}
      <div className="text-[#01427A]">
        <Icon className="mx-auto mb-3 h-10 w-10 fill-current" />
        <p className="text-xs md:text-sm font-bold tracking-[0.08em] leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
}

/* ==== Icons (same as before) ==== */

function HouseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4 11.5L12 4l8 7.5v7.5a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-7.5z" />
    </svg>
  );
}

function SnowflakeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M11 3h2v4.1l2.1-2.1 1.4 1.4L13 9.9V11h1.1l3.5-3.5 1.4 1.4L17.4 12l1.6 3.1-1.4 1.4L14.1 13H13v1.1l3.6 3.6-1.4 1.4L13 17.1V21h-2v-3.9l-2.2 2.2-1.4-1.4L11 14.1V13H9.9l-3.5 3.5-1.4-1.4L6.6 12 5 8.9l1.4-1.4L9.9 11H11V9.9L7.4 6.4 8.8 5l2.2 2.2V3z" />
    </svg>
  );
}

function DropletIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2.5 8.2 7.7C6.8 9.6 6 11 6 13a6 6 0 0 0 12 0c0-2-0.8-3.4-2.2-5.3L12 2.5zM9 13a3 3 0 0 0 3 3 1 1 0 0 1 0 2 5 5 0 0 1-5-5 1 1 0 0 1 2 0z" />
    </svg>
  );
}
