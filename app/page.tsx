"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Users, Star, TrendingUp, Sparkles, Leaf, Clock, Shield, Facebook, Instagram, X } from "lucide-react"
import { useState } from "react"

export default function KiYaLaundryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagem em fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/professional-black-woman-in-clean-white-uniform-ho.jpg"
            alt="Professional laundry service"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openImageModal("/professional-black-woman-in-clean-white-uniform-ho.jpg")}
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            <img
              src="/kiya-logo.png"
              alt="KiYa Laundry Logo"
              className="w-32 h-32 mx-auto mb-6 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImageModal("/kiya-logo.png")}
            />
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4">
              Frescura, <span className="text-primary">Entregue.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              KiYa Lavandaria oferece serviços de lavandaria de alta qualidade com agendamento fácil. Agende por WhatsApp hoje mesmo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a
                href="https://wa.me/55XXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Agendar Agora
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      </header>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Nossa Missão & <span className="text-primary">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Desde 2020, oferecemos soluções ecológicas, fiáveis e convenientes para famílias ocupadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="/black-person-holding-eco-friendly-laundry-products.jpg"
                  alt="Eco-friendly service"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openImageModal("/black-person-holding-eco-friendly-laundry-products.jpg")}
                />
              </div>
              <CardContent className="pt-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ecológico</h3>
                <p className="text-muted-foreground">
                  Produtos biodegradáveis e processos sustentáveis que respeitam o meio ambiente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="/confident-black-professional-with-shield-symbol-re.jpg"
                  alt="Reliable service"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openImageModal("/confident-black-professional-with-shield-symbol-re.jpg")}
                />
              </div>
              <CardContent className="pt-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Confiável</h3>
                <p className="text-muted-foreground">Qualidade garantida e cuidado especial com cada peça de roupa.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="/black-person-using-smartphone-for-easy-scheduling-.jpg"
                  alt="Convenient service"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openImageModal("/black-person-using-smartphone-for-easy-scheduling-.jpg")}
                />
              </div>
              <CardContent className="pt-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Conveniente</h3>
                <p className="text-muted-foreground">
                  Agendamento fácil via WhatsApp e horários flexíveis para sua comodidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de lavandaria para atender todas as suas necessidades com
              qualidade e praticidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lavagem Completa</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Lavagem e secagem profissional de roupas do dia a dia com produtos de alta qualidade.
                </p>
                <div className="grid grid-cols-5 gap-1 mb-4">
                  <img
                    src="/clean-washed-clothes-1.jpg"
                    alt="Roupa lavada 1"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-1.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-2.jpg"
                    alt="Roupa lavada 2"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-2.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-3.jpg"
                    alt="Roupa lavada 3"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-3.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-4.jpg"
                    alt="Roupa lavada 4"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-4.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-5.jpg"
                    alt="Roupa lavada 5"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-5.jpg")}
                  />
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <img
                    src="/clean-washed-clothes-6.jpg"
                    alt="Roupa lavada 6"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-6.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-7.jpg"
                    alt="Roupa lavada 7"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-7.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-8.jpg"
                    alt="Roupa lavada 8"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-8.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-9.jpg"
                    alt="Roupa lavada 9"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-9.jpg")}
                  />
                  <img
                    src="/clean-washed-clothes-10.jpg"
                    alt="Roupa lavada 10"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/clean-washed-clothes-10.jpg")}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Limpeza a Seco</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tratamento especializado para roupas delicadas, ternos, vestidos e peças especiais.
                </p>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Antes</p>
                      <img
                        src="/dirty-carpet-before.jpg"
                        alt="Tapete sujo"
                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/dirty-carpet-before.jpg")}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Depois</p>
                      <img
                        src="/clean-carpet-after.jpg"
                        alt="Tapete limpo"
                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/clean-carpet-after.jpg")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img
                      src="/dirty-sofa-before.jpg"
                      alt="Sofá sujo"
                      className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/dirty-sofa-before.jpg")}
                    />
                    <img
                      src="/clean-sofa-after.jpg"
                      alt="Sofá limpo"
                      className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/clean-sofa-after.jpg")}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img
                      src="/dirty-mattress-before.jpg"
                      alt="Cama suja"
                      className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/dirty-mattress-before.jpg")}
                    />
                    <img
                      src="/clean-mattress-after.jpg"
                      alt="Cama limpa"
                      className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/clean-mattress-after.jpg")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Remoção de Manchas</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tratamento especializado para manchas difíceis com técnicas avançadas de limpeza.
                </p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Antes</p>
                      <img
                        src="/stained-shirt-before.jpg"
                        alt="Camisa manchada"
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/stained-shirt-before.jpg")}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Depois</p>
                      <img
                        src="/clean-shirt-after.jpg"
                        alt="Camisa limpa"
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/clean-shirt-after.jpg")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img
                      src="/stained-dress-before.jpg"
                      alt="Vestido manchado"
                      className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/stained-dress-before.jpg")}
                    />
                    <img
                      src="/clean-dress-after.jpg"
                      alt="Vestido limpo"
                      className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal("/clean-dress-after.jpg")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passadoria</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Passadoria profissional que deixa suas roupas impecáveis e prontas para usar.
                </p>
                <div className="space-y-2">
                  <div className="text-center mb-2">
                    <p className="text-xs text-muted-foreground mb-1">Roupas Engomadas</p>
                    <div className="grid grid-cols-5 gap-1">
                      <img
                        src="/ironed-shirt-1.jpg"
                        alt="Camisa engomada"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/ironed-shirt-1.jpg")}
                      />
                      <img
                        src="/ironed-shirt-2.jpg"
                        alt="Camisa engomada"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/ironed-shirt-2.jpg")}
                      />
                      <img
                        src="/ironed-pants-1.jpg"
                        alt="Calça engomada"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/ironed-pants-1.jpg")}
                      />
                      <img
                        src="/ironed-dress-1.jpg"
                        alt="Vestido engomada"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/ironed-dress-1.jpg")}
                      />
                      <img
                        src="/ironed-uniform-1.jpg"
                        alt="Uniforme engomada"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/ironed-uniform-1.jpg")}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Roupas Dobradas</p>
                    <div className="grid grid-cols-5 gap-1">
                      <img
                        src="/folded-clothes-1.jpg"
                        alt="Roupas dobradas"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/folded-clothes-1.jpg")}
                      />
                      <img
                        src="/folded-clothes-2.jpg"
                        alt="Roupas dobradas"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/folded-clothes-2.jpg")}
                      />
                      <img
                        src="/folded-clothes-3.jpg"
                        alt="Roupas dobradas"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/folded-clothes-3.jpg")}
                      />
                      <img
                        src="/folded-clothes-4.jpg"
                        alt="Roupas dobradas"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/folded-clothes-4.jpg")}
                      />
                      <img
                        src="/folded-clothes-5.jpg"
                        alt="Roupas dobradas"
                        className="w-full h-10 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal("/folded-clothes-5.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lavagem Ecológica</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Produtos biodegradáveis e processos sustentáveis que cuidam do meio ambiente.
                </p>
                <div className="grid grid-cols-5 gap-1">
                  <img
                    src="/eco-product-1.jpg"
                    alt="Produto ecológico"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/eco-product-1.jpg")}
                  />
                  <img
                    src="/eco-product-2.jpg"
                    alt="Produto ecológico"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/eco-product-2.jpg")}
                  />
                  <img
                    src="/eco-product-3.jpg"
                    alt="Produto ecológico"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/eco-product-3.jpg")}
                  />
                  <img
                    src="/eco-product-4.jpg"
                    alt="Produto ecológico"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/eco-product-4.jpg")}
                  />
                  <img
                    src="/eco-product-5.jpg"
                    alt="Produto ecológico"
                    className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/eco-product-5.jpg")}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Recolhe e Entrega ao Domicílio</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Serviço completo de recolha e entrega na sua casa para maior comodidade.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/pickup-delivery-1.jpg"
                    alt="Recolha ao domicílio"
                    className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/pickup-delivery-1.jpg")}
                  />
                  <img
                    src="/pickup-delivery-2.jpg"
                    alt="Entrega ao domicílio"
                    className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/pickup-delivery-2.jpg")}
                  />
                  <img
                    src="/pickup-delivery-3.jpg"
                    alt="Serviço de entrega"
                    className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/pickup-delivery-3.jpg")}
                  />
                  <img
                    src="/pickup-delivery-4.jpg"
                    alt="Cliente recebendo roupas"
                    className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal("/pickup-delivery-4.jpg")}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-background p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <img
                src="/happy-black-family-with-perfectly-clean-and-fresh-.jpg"
                alt="Família satisfeita com serviços KiYa Laundry"
                className="w-full h-48 object-cover rounded-lg mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openImageModal("/happy-black-family-with-perfectly-clean-and-fresh-.jpg")}
              />
              <h3 className="text-xl font-semibold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Entre em contato conosco pelo WhatsApp e faça seu pedido de forma rápida e prática.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a
                  href="https://wa.me/55XXXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Faça seu Pedido
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Números que <span className="text-primary">Impressionam</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Nossa dedicação refletida em resultados concretos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+5.000 kg</div>
                <p className="text-muted-foreground font-medium">Lavandaria Processada</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+1.000</div>
                <p className="text-muted-foreground font-medium">Clientes Satisfeitos</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+300</div>
                <p className="text-muted-foreground font-medium">Feedbacks Positivos</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+2.500 kg</div>
                <p className="text-muted-foreground font-medium">Lavado por Ano</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/diverse-group-of-happy-black-customers-with-fresh-.jpg"
            alt="Satisfied customers"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openImageModal("/diverse-group-of-happy-black-customers-with-fresh-.jpg")}
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Pronto para Experimentar a Diferença?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 famílias que já confiam na KiYa Laundry. Agendamento rápido e fácil pelo WhatsApp!
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">KiYa Laundry</h3>
            <p className="text-muted-foreground">Frescura, Entregue. Desde 2020.</p>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/share/1BTRToQ2dt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/kiya_lavandaria?igsh=eGNxeWNidTR4bDVn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-6 h-6 text-primary" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mt-2">
              Entre em contato:{" "}
              <a href="https://wa.me/55XXXXXXXXXXX" className="text-primary hover:underline">
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
