export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Krishnpal Singh Solanki
          </p>
        </div>
      </div>
    </footer>
  );
}
