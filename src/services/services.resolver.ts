import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ServiceService } from './services.service';
import { Service } from '@prisma/client';
import { CreateServiceInput } from './dto/create-service.dto';
import { UpdateServiceInput } from './dto/update-service.dto';


@Resolver('Service')
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Query('services')
  async getServices() {
    return this.serviceService.findAllServices();
  }

  @Query('service')
  async getServiceById(@Args('id') id: number) {
    return this.serviceService.findServiceById(id);
  }

  @Mutation('createService')
  async createService(@Args('data') data: CreateServiceInput) {
    return this.serviceService.createService(data);
  }

  @Mutation('updateService')
  async updateService(
    @Args('id') id: number,
    @Args('data') data: UpdateServiceInput,
  ) {
    return this.serviceService.updateService(id, data);
  }

  @Mutation('deleteService')
  async deleteService(@Args('id') id: number) {
    return this.serviceService.deleteService(id);
  }
}
