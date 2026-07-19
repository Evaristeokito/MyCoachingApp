import { AgentCardInstitution, IAgent, LookupValue } from 'src/app/shared/models/agents';

export const EMPTY_LABEL = 'A definir';

export function clean(value?: string | null): string {
  const normalized = value?.trim();
  return normalized && normalized !== 'null' && normalized !== 'undefined'
    ? normalized
    : '';
}

export function lookupText(value: LookupValue): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'object') {
    return (
      clean(value.libelle) ||
      clean(value.label) ||
      clean(value.nom) ||
      clean(value.name) ||
      clean(value.designation)
    );
  }

  return clean(String(value));
}

export function field(...values: LookupValue[]): string {
  for (const value of values) {
    const normalized = lookupText(value);

    if (normalized) {
      return normalized;
    }
  }

  return EMPTY_LABEL;
}

export function displayName(agent?: IAgent): string {
  const fullName = clean(agent?.name);

  if (fullName) {
    return fullName;
  }

  return (
    [clean(agent?.name), clean(agent?.lastname), clean(agent?.firstname)]
      .filter(Boolean)
      .join(' ') || 'Agent'
  );
}

export function firstName(agent?: IAgent): string {
  return (
    clean(agent?.firstname) || displayName(agent).split(' ').slice(-1).join(' ')
  );
}

export function lastName(agent?: IAgent): string {
  const names = [clean(agent?.name), clean(agent?.lastname)]
    .filter(Boolean)
    .join(' ');
  return names || displayName(agent);
}

export function dateField(value?: string | Date | null): string {
  if (!value) {
    return EMPTY_LABEL;
  }

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return clean(String(value)) || EMPTY_LABEL;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(date)
    .replace('.', '');
}

export function avatarUrl(agent?: IAgent): string | null {
  const source =
    clean(agent?.photoUrl) || clean(agent?.avatarUrl) || clean(agent?.photo);

  if (!source) {
    return null;
  }

  if (
    source.startsWith('http') ||
    source.startsWith('/') ||
    source.startsWith('data:') ||
    source.startsWith('blob:')
  ) {
    return source;
  }

  return `data:image/jpeg;base64,${source}`;
}

export function initials(agent?: IAgent): string {
  return displayName(agent)
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

export function qrPayload(
  agent: IAgent,
  institution: AgentCardInstitution,
): string {
  if (institution.verificationBaseUrl && agent.id) {
    return `${institution.verificationBaseUrl.replace(/\/$/, '')}/${agent.id}`;
  }

  return JSON.stringify({
    type: 'AGENT_SERVICE_CARD',
    id: agent.id ?? null,
    matricule: field(agent.matricule),
    nom: displayName(agent),
    service: field(agent.service),
    fonction: field(agent.fonction),
    issuedBy: institution.ministry ?? null,
  });
}
