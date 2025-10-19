import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Briefcase, 
  Users, 
  Settings,
  TrendingUp,
  Mail,
  CheckCircle2
} from 'lucide-react';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  // Mock data
  const stats = [
    { label: 'Demandes en attente', value: 12, icon: MessageSquare, color: 'text-blue-600' },
    { label: 'Services actifs', value: 4, icon: Briefcase, color: 'text-green-600' },
    { label: 'Clients suivis', value: 47, icon: Users, color: 'text-purple-600' },
    { label: 'Taux de satisfaction', value: '98%', icon: TrendingUp, color: 'text-amber-600' },
  ];

  const recentMessages = [
    { id: 1, name: 'Marie Dubois', service: 'Formation Cuisine', status: 'new', date: '2025-01-15' },
    { id: 2, name: 'Jean Martin', service: 'Immigration', status: 'in-progress', date: '2025-01-14' },
    { id: 3, name: 'Sophie Bernard', service: 'Développement Carrière', status: 'completed', date: '2025-01-13' },
    { id: 4, name: 'Pierre Rousseau', service: 'Prestations sur Mesure', status: 'new', date: '2025-01-12' },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { label: 'Nouveau', variant: 'default' as const },
      'in-progress': { label: 'En cours', variant: 'secondary' as const },
      completed: { label: 'Traité', variant: 'outline' as const },
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">ORIENTA PRO Admin</h1>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="dashboard">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Tableau de bord
            </TabsTrigger>
            <TabsTrigger value="messages">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="services">
              <Briefcase className="w-4 h-4 mr-2" />
              Services
            </TabsTrigger>
            <TabsTrigger value="clients">
              <Users className="w-4 h-4 mr-2" />
              Clients
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Recent Messages */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Messages Récents
              </h2>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-semibold">{message.name}</h3>
                      <p className="text-sm text-muted-foreground">{message.service}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{message.date}</span>
                      {getStatusBadge(message.status)}
                      <Button size="sm" variant="outline">Voir</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Gestion des Messages</h2>
              <p className="text-muted-foreground">
                Interface de gestion des demandes de contact et consultations...
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Gestion des Services</h2>
              <p className="text-muted-foreground">
                Ajouter, modifier ou supprimer les services proposés...
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="clients">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Gestion des Clients</h2>
              <p className="text-muted-foreground">
                Base de données clients et historique des interactions...
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
