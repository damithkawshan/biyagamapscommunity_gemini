import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

export function CouncilStructure() {
  const councilMembers = [
    {
      name: "Chairman",
      role: "Chairman - Biyagama PS",
      initials: "CH",
      description: "Leading the Pradeshiya Sabha with dedicated service to the community"
    },
    {
      name: "Vice Chairman",
      role: "Vice Chairman",
      initials: "VC",
      description: "Supporting the administration and community development initiatives"
    },
    {
      name: "Council Member",
      role: "Member - Ward 1",
      initials: "W1",
      description: "Representing Ward 1 constituents and their needs"
    },
    {
      name: "Council Member",
      role: "Member - Ward 2",
      initials: "W2",
      description: "Serving the residents of Ward 2"
    },
    {
      name: "Council Member",
      role: "Member - Ward 3",
      initials: "W3",
      description: "Advocating for Ward 3 development"
    },
    {
      name: "Council Member",
      role: "Member - Ward 4",
      initials: "W4",
      description: "Working for the progress of Ward 4"
    },
    {
      name: "Council Member",
      role: "Member - Ward 5",
      initials: "W5",
      description: "Representing Ward 5 interests"
    },
    {
      name: "Council Member",
      role: "Member - Ward 6",
      initials: "W6",
      description: "Serving Ward 6 community"
    }
  ];

  const departments = [
    {
      name: "Administration",
      head: "Secretary",
      description: "Oversees daily operations, policy implementation, and administrative functions"
    },
    {
      name: "Engineering",
      head: "Chief Engineer",
      description: "Manages infrastructure development, road maintenance, and construction projects"
    },
    {
      name: "Public Health",
      head: "Public Health Inspector",
      description: "Ensures community health, sanitation, and disease prevention"
    },
    {
      name: "Finance",
      head: "Treasurer",
      description: "Manages revenue collection, budgeting, and financial administration"
    },
    {
      name: "Planning",
      head: "Planning Officer",
      description: "Oversees urban planning, building approvals, and development control"
    },
    {
      name: "Technical Services",
      head: "Technical Officer",
      description: "Manages water supply, waste management, and technical services"
    }
  ];

  return (
    <section id="structure" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Council Structure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team working to serve our community
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 text-center">Elected Officials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        <div>
          <h3 className="mb-6 text-center">Municipal Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{dept.name}</CardTitle>
                  <CardDescription>Head: {dept.head}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg max-w-3xl mx-auto text-center">
          <h4 className="mb-3">About Our Council</h4>
          <p className="text-muted-foreground">
            Biyagama Pradeshiya Sabha is committed to serving the community through transparent 
            governance and efficient public service delivery. Our council conducts regular meetings 
            to address community needs, approve development projects, and ensure the welfare of all 
            residents. We welcome public participation and encourage residents to engage with their 
            local government.
          </p>
        </div>
      </div>
    </section>
  );
}
