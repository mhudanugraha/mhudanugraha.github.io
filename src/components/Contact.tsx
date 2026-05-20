export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 w-full">
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-center">
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Muhammad Huda Nugraha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
