"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  MapPin,
  Star,
  Shield,
  Smartphone,
  Users,
  Car,
  Phone,
  Calendar,
  DollarSign,
  Clock,
  UserCheck,
  Heart,
  Target,
  Globe,
  Download,
  Award,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UberWebsite() {
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [partida, setPartida] = useState("")
  const [destino, setDestino] = useState("")
  const [agendarPartida, setAgendarPartida] = useState("")
  const [agendarDestino, setAgendarDestino] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <Link href="/" className="text-2xl font-bold text-slate-900">
                UltraUrb
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#"
                className="relative group px-4 py-2 text-gray-600 hover:text-slate-900 transition-all duration-300 font-medium"
              >
                <span className="flex items-center gap-2">Viagem</span>
              </Link>

              <Link
                href="#drivers"
                className="relative group px-4 py-2 text-gray-600 hover:text-slate-900 transition-all duration-300 font-medium"
              >
                <span className="flex items-center gap-2">Dirigir</span>
              </Link>

              <Link
                href="#"
                className="relative group px-4 py-2 text-gray-600 hover:text-slate-900 transition-all duration-300 font-medium"
              >
                <span className="flex items-center gap-2">Empresas</span>
              </Link>

              <Link
                href="#about"
                className="relative group px-4 py-2 text-gray-600 hover:text-slate-900 transition-all duration-300 font-medium"
              >
                <span className="flex items-center gap-2">Sobre</span>
              </Link>
            </nav>

            {/* Right Side - Contact & CTA */}
            <div className="flex items-center space-x-4">
              {/* Contact Info */}
              <div className="hidden xl:flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-full border">
                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500 text-xs">Central 24h</div>
                  <div className="font-semibold text-gray-800">(19) 9 9417-1162</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                <Phone className="h-4 w-4 mr-2" />
                <Link href="https://w.app/rttransporte">
                <span className="hidden sm:inline">Ligar Agora</span>
                </Link>
                <span className="sm:hidden">(19) 9 9417-1162</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  /* Add mobile menu toggle logic */
                }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className="w-5 h-0.5 bg-gray-600 rounded-full"></div>
                  <div className="w-5 h-0.5 bg-gray-600 rounded-full"></div>
                  <div className="w-5 h-0.5 bg-gray-600 rounded-full"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  #1 em Transporte Urbano
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Vá a qualquer lugar com a <span className="text-yellow-400">UltraUrb</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Solicite uma viagem, entre no carro e vá. Ou dirija quando quiser e ganhe dinheiro no seu horário.
                </p>
              </div>

              {/* Ride Booking Form */}
              <Card className="bg-white text-black shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Car className="h-4 w-4 text-white" />
                    </div>
                    Solicite uma viagem agora
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Local de partida"
                        className="pl-10 border-gray-200 focus:border-slate-400"
                        value={partida}
                        onChange={e => setPartida(e.target.value)}
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Para onde?"
                        className="pl-10 border-gray-200 focus:border-slate-400"
                        value={destino}
                        onChange={e => setDestino(e.target.value)}
                      />
                    </div>
                    <br/>
                  </div>
                  <Link
                    href={`https://wa.me/55199994171162?text=${encodeURIComponent(
                      `Oi, tudo bem? Gostaria de um motorista particular!\nDestino: ${destino}\nOrigem: ${partida}`
                    )}`}
                    target="_blank"
                  >
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Solicitar agora</Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    onClick={() => setShowScheduleModal(true)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar para mais tarde
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/backgroundprincipal.jpg?height=800&width=600"
                alt="Vista da cidade de Espírito Santo do Pinhal, São Paulo"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Quick Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">100% Seguro</h3>
              <p className="text-gray-600">Motoristas verificados e viagens rastreadas em tempo real</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Rápido & Fácil</h3>
              <p className="text-gray-600">Chegamos em minutos, pagamento automático</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <DollarSign className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Preço Justo</h3>
              <p className="text-gray-600">Tarifas transparentes sem surpresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Registration Section */}
      <section id="drivers" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2 text-yellow-400" />
              Seja um Parceiro UltraUrb
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Ganhe dinheiro dirigindo no seu <span className="text-yellow-400">tempo livre</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Flexibilidade total, pagamentos semanais e suporte 24h. Comece hoje mesmo!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Ganhos Atrativos</h3>
                  <p className="text-green-100 text-sm">Até R$ 2.500/mês trabalhando meio período</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Horário Flexível</h3>
                  <p className="text-green-100 text-sm">Trabalhe quando quiser, seja seu próprio chefe</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Seguro Incluso</h3>
                  <p className="text-green-100 text-sm">Cobertura completa durante as viagens</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Suporte 24h</h3>
                  <p className="text-green-100 text-sm">Ajuda sempre que precisar</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/55199994171162?text=Oi,%20gostaria%20de%20me%20cadastrar%20como%20motorista%20parceiro%20da%20UltraUrb!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  style={{ textDecoration: 'none' }}
                >
                  <Button className="bg-white text-green-600 hover:bg-gray-100 w-full font-semibold">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Cadastre-se Agora
                  </Button>
                </a>
                <a
                  href="https://wa.me/55199994171162?text=Oi,%20gostaria%20de%20ser%20um%20parceiro%20motorista%20da%20UltraUrb!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 w-full bg-transparent font-semibold"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Fale Conosco
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/motorista.png?height=500&width=600"
                alt="Motorista feliz da RT Transporte"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6">
              <Download className="h-4 w-4 mr-2 text-yellow-400" />
              Baixe Grátis
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Aplicativo <span className="text-yellow-400">UltraUrb</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tenha a RT Transporte sempre na palma da sua mão. Solicite viagens, acompanhe em tempo real e pague de
              forma segura.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Interface Intuitiva</h3>
                    <p className="text-gray-300">Design simples e fácil de usar para todas as idades</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Rastreamento em Tempo Real</h3>
                    <p className="text-gray-300">Acompanhe sua viagem do início ao fim</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Pagamento Seguro</h3>
                    <p className="text-gray-300">Múltiplas formas de pagamento com total segurança</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://linktr.ee/ultracoding"
                  target="_blank"
                  className="flex items-center justify-center bg-black text-white hover:bg-gray-900 px-6 py-4 rounded-xl transition-colors font-medium"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">▶</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Disponível no</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://linktr.ee/ultracoding"
                  target="_blank"
                  className="flex items-center justify-center bg-black text-white hover:bg-gray-900 px-6 py-4 rounded-xl transition-colors font-medium"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">🍎</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Baixar na</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/aplicativo.png?height=150&width=100"
                alt="Aplicativo UltraUrb no smartphone"
                width={300}
                height={200}

                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3 text-sm font-medium mb-6 text-gray-700">
              <Heart className="h-4 w-4 mr-2" />
              Nossa História
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-slate-900">UltraUrb</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectando pessoas e oportunidades através de tecnologia e inovação no transporte urbano
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Facilitar a mobilidade urbana através de tecnologia inovadora, conectando pessoas de forma segura,
                  rápida e acessível.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a principal plataforma de mobilidade urbana do interior paulista, reconhecida pela excelência e
                  inovação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>
                    • <strong className="text-blue-600">Segurança:</strong> Prioridade máxima
                  </li>
                  <li>
                    • <strong className="text-green-600">Transparência:</strong> Preços justos
                  </li>
                  <li>
                    • <strong className="text-purple-600">Inovação:</strong> Tecnologia avançada
                  </li>
                  <li>
                    • <strong className="text-orange-600">Comunidade:</strong> Desenvolvimento local
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Nosso Compromisso</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Estamos comprometidos em oferecer mais do que apenas transporte. Criamos oportunidades de trabalho e
                  promovemos a mobilidade sustentável.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-sm text-gray-600">Anos de experiência</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Motoristas parceiros</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-1">50K+</div>
                    <div className="text-sm text-gray-600">Viagens realizadas</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Cidades atendidas</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/maos.jpeg?height=500&width=500"
                  alt="UltraUrb na comunidade"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              UltraUrb em <span className="text-yellow-400">números</span>
            </h2>
            <p className="text-xl text-gray-300">Veja como estamos movendo o mundo para frente</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-blue-400">5037</div>
              <div className="text-gray-300">Usuários ativos mensais</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-green-400">103</div>
              <div className="text-gray-300">Motoristas parceiros</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-purple-400">10</div>
              <div className="text-gray-300">Cidades atendidas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-400">30.000</div>
              <div className="text-gray-300">Viagens concluídas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Pronto para <span className="text-white">começar?</span>
            </h2>
            <p className="text-xl text-yellow-900 mb-8">
              Junte-se a milhões de pessoas que já escolheram a UltraUrb
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="#"
                className="flex-1"
                style={{ textDecoration: 'none' }}
              >
                <Button className="bg-slate-900 text-white hover:bg-slate-800 flex-1 font-bold py-3 w-full">
                  <Car className="h-4 w-4 mr-2" />
                  Viajar Agora
                </Button>
              </a>
              <a
                href="https://wa.me/5519989742092?text=Oi,%20gostaria%20de%20ser%20um%20parceiro%20motorista%20da%20RT%20Transporte!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white flex-1 bg-transparent font-bold py-3 w-full"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Ser Motorista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Car className="h-5 w-5 text-slate-900" />
                </div>
                <span className="text-xl font-bold">UltraUrb</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Conectando pessoas através de tecnologia e inovação no transporte urbano.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(19) 9 9417-1162</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Solicitar Viagem
                  </Link>
                </li>
                <li>
                  <Link href="#drivers" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Seja Motorista
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Para Empresas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Acessibilidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex justify-center items-center">
              <div className="text-gray-400 text-sm text-center">
                Copyright © 2025. Todos os direitos reservados -
                <a
                  href="https://linktr.ee/ultracoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold ml-1"
                >
                  UltraCoding
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Schedule Modal */}
      <Dialog open={showScheduleModal} onOpenChange={setShowScheduleModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-slate-700" />
              Agendar Viagem - Central de Atendimento
            </DialogTitle>
            <DialogDescription>
              Preencha os dados para agendar sua corrida. Você será redirecionado para o WhatsApp.
            </DialogDescription>
          </DialogHeader>


          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Data da viagem</label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="border-gray-200 focus:border-slate-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Horário</label>
                <Input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="border-gray-200 focus:border-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Origem</label>
                <Input
                  placeholder="Local de partida"
                  value={agendarPartida}
                  onChange={e => setAgendarPartida(e.target.value)}
                  className="border-gray-200 focus:border-slate-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Destino</label>
                <Input
                  placeholder="Para onde?"
                  value={agendarDestino}
                  onChange={e => setAgendarDestino(e.target.value)}
                  className="border-gray-200 focus:border-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Seu telefone para contato</label>
              <Input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-gray-200 focus:border-slate-400"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-slate-700 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Como funciona o agendamento:</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Nossa central ligará em até 30 minutos</li>
                    <li>• Confirmaremos todos os detalhes da viagem</li>
                    <li>• Você receberá SMS de confirmação</li>
                    <li>• 15 minutos antes, enviaremos dados do motorista</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowScheduleModal(false)} className="flex-1">
                Cancelar
              </Button>
              <Button
                disabled={!selectedDate || !selectedTime || !phoneNumber || !agendarPartida || !agendarDestino}
                className="flex-1 w-full bg-slate-900 text-white hover:bg-slate-800"
                onClick={() => {
                  // Formatar data para dd/MM/yyyy
                  let dataFormatada = selectedDate;
                  if (selectedDate) {
                    const [ano, mes, dia] = selectedDate.split('-');
                    dataFormatada = `${dia}/${mes}/${ano}`;
                  }
                  const msg = `Oi, tudo bem? Gostaria de agendar uma corrida!\nData: ${dataFormatada}\nHorário: ${selectedTime}\nDestino: ${agendarDestino}\nOrigem: ${agendarPartida}\nTelefone: ${phoneNumber}`;
                  const url = `https://wa.me/55199994171162?text=${encodeURIComponent(msg)}`;
                  window.open(url, '_blank');
                  setShowScheduleModal(false);
                  setSelectedDate("");
                  setSelectedTime("");
                  setPhoneNumber("");
                  setAgendarPartida("");
                  setAgendarDestino("");
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Solicitar Contato
              </Button>
            </div>

            <div className="text-center pt-2 border-t">
              <p className="text-sm text-gray-500">Central de Atendimento UltraUrb</p>
              <p className="text-sm font-medium text-gray-700">📞 (19) 99417-1162 | Atendimento 24h</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white hover:bg-gray-50 text-slate-900 rounded-full shadow-2xl hover:shadow-3xl border border-gray-200 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform duration-200 stroke-2" />
        </button>
      )}
    </div>
  )
}
