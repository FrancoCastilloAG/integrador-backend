import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ServiceService } from './services.service';
import { Service } from '@prisma/client';

@Resolver('Service')
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}
  @Query('getAllServices')
  async getAllServices(): Promise<Service[]> {
    return this.serviceService.getAllServices();
  }

  @Query('getServicesByProfessionalId')
  async getServicesByProfessionalId(
    @Args('id') id: number,
  ): Promise<Service[]> {
    return this.serviceService.getServicesByProfessionalId(id);
  }

  @Mutation('createService')
  async createService(@Args('data') data: Service): Promise<Service> {
    return this.serviceService.createService(data);
  }

  @Mutation('deleteService')
  async deleteService(@Args('id') id: number): Promise<Service> {
    return this.serviceService.deleteService(id);
  }

  @Mutation('updateService')
  async updateService(
    @Args('id') id: number,
    @Args('data') data: Partial<Service>,
  ): Promise<Service> {
    return this.serviceService.updateService(id, data);
  }
}
