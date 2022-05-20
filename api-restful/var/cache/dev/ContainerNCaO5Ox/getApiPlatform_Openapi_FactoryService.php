<?php

namespace ContainerNCaO5Ox;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getApiPlatform_Openapi_FactoryService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'api_platform.openapi.factory' shared service.
     *
     * @return \ApiPlatform\Core\OpenApi\Factory\OpenApiFactory
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'OpenApi'.\DIRECTORY_SEPARATOR.'Factory'.\DIRECTORY_SEPARATOR.'OpenApiFactoryInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'OpenApi'.\DIRECTORY_SEPARATOR.'Factory'.\DIRECTORY_SEPARATOR.'OpenApiFactory.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'DataProvider'.\DIRECTORY_SEPARATOR.'PaginationOptions.php';

        return $container->privates['api_platform.openapi.factory'] = new \ApiPlatform\Core\OpenApi\Factory\OpenApiFactory(($container->privates['api_platform.metadata.resource.name_collection_factory.cached'] ?? $container->getApiPlatform_Metadata_Resource_NameCollectionFactory_CachedService()), ($container->privates['api_platform.metadata.resource.metadata_factory.cached'] ?? $container->getApiPlatform_Metadata_Resource_MetadataFactory_CachedService()), ($container->privates['api_platform.metadata.property.name_collection_factory.cached'] ?? $container->getApiPlatform_Metadata_Property_NameCollectionFactory_CachedService()), ($container->privates['api_platform.metadata.property.metadata_factory.cached'] ?? $container->getApiPlatform_Metadata_Property_MetadataFactory_CachedService()), ($container->privates['api_platform.hydra.json_schema.schema_factory'] ?? $container->getApiPlatform_Hydra_JsonSchema_SchemaFactoryService()), ($container->privates['api_platform.json_schema.type_factory'] ?? $container->getApiPlatform_JsonSchema_TypeFactoryService()), ($container->privates['api_platform.operation_path_resolver.router'] ?? $container->getApiPlatform_OperationPathResolver_RouterService()), ($container->privates['api_platform.filter_locator'] ?? ($container->privates['api_platform.filter_locator'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [], []))), ($container->privates['api_platform.subresource_operation_factory.cached'] ?? $container->getApiPlatform_SubresourceOperationFactory_CachedService()), ($container->privates['api_platform.identifiers_extractor.cached'] ?? $container->getApiPlatform_IdentifiersExtractor_CachedService()), $container->parameters['api_platform.formats'], ($container->privates['api_platform.openapi.options'] ?? $container->load('getApiPlatform_Openapi_OptionsService')), new \ApiPlatform\Core\DataProvider\PaginationOptions(true, 'page', false, 'itemsPerPage', false, 'pagination'));
    }
}
