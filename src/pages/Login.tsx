import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { UtensilsCrossed, Sandwich, Coffee } from "lucide-react";
import { AaharamLogo, TatvaSoftLogo } from "@/components/brand/Wordmarks";
const Login = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slides = [
    { title: "Freshly made, every time", Icon: UtensilsCrossed, caption: "Order cafeteria favorites with a tap." },
    { title: "Quick bites you’ll love", Icon: Sandwich, caption: "Snacks and sandwiches for your break." },
    { title: "Sip and relax", Icon: Coffee, caption: "Hot beverages to keep you going." },
  ];

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    const id = setInterval(() => api.scrollNext(), 3000);
    return () => {
      api.off("select", onSelect);
      clearInterval(id);
    };
  }, [api]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Login • Cafeteria Admin</title>
        <meta name="description" content="Login to manage orders and daily menus." />
        <link rel="canonical" href={(typeof window !== 'undefined' && window.location.href) || ''} />
      </Helmet>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <aside className="relative hidden bg-secondary md:block">
          <div className="absolute inset-0 rounded-br-[4rem] bg-secondary" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 p-10">
            <Carousel className="w-full max-w-md" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                {slides.map((s, i) => (
                  <CarouselItem key={i}>
                    <div className="overflow-hidden rounded-2xl border bg-card/70 p-6 shadow text-center">
                      <div className="text-sm font-medium mb-3">{s.title}</div>
                      <s.Icon className="mx-auto h-28 w-28 text-primary" aria-hidden="true" />
                      <div className="mt-4 text-sm text-muted-foreground">{s.caption}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-4 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    selectedIndex === i ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </aside>
        <section className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <AaharamLogo />
                <span className="text-muted-foreground">+</span>
                <TatvaSoftLogo />
              </div>
              <div className="mx-auto mb-6 h-px w-4/5 bg-border" />
              <h2 className="text-3xl font-semibold">Login</h2>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/orders");
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><Checkbox id="remember" className="rounded-none" /><Label htmlFor="remember">Remember me</Label></div>
                <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">Forgot your password?</a>
              </div>
              <Button size="lg" className="w-full">Login</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
